(function (factory) {
    if ( typeof define === 'function' && define.amd ) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
 // parse url: [protocol ], [hostname], [pathname], [search], [hash]
 // @param  {String} url
 // @return {Object} a
 var parseLink = (function() {
  var a = document.createElement("a")
    return function( url ) {
      return ( a.href = url ) && a;
     }
   }())
 , $initialized = true
 , $container
 , $global = window
 , $location = $global.location
 // "http://foo.com:1337/path/?search=away#hash"
 , $shorten = { 
      link  : "hostname" , // => "foo.com"
      proto : "protocol" , // => "http:"
      path  : "pathname" , // => "/path/"
      s     : "search"   , // => "?search=away"
      hash  : "hash"     , // => "#hash"
      port  : "port"     , // => "1337"
      host  : "host"     , // => "foo.com:1337"
 }
 , $template = function( text, url ) {
    var thisLink = parseLink( url );
     return "<div>" + text.replace( /{{([a-z]+)}}/g, 
      function( string, bracket, offset, _s ) {
       return  bracket === "this" ? url : thisLink[ $shorten[ bracket ] ]; 
    }) +
    "</div> \
      <div class='away-buttons'> \
        <button id='ok'>" + buttons["ok"] + "</button> \
        <button id='no'>" + buttons["cancel"] + "</button> \
     </div>"
  }
 , buttons = {
     ok     : "OK"    ,
     cancel : "cancel"
 };
 // define the jQuery plugin
 $.fn.away = function( defaults ) {
     
 defaults = defaults || {};
 // replace defaults props in btns 
 defaults.btn && $.extend( buttons, defaults.btn );
 // create away container and
 // check if container has been created
 $initialized && ($container = $("<div></div>")
  .css({
   "position"  : "fixed"    , "display"  : "none",
   "left"      : 0          , "right"    : 0     ,
   "top"       : 0          , "bottom"   : 0     ,
   "background": "#C2C2C2"  , "z-index"  : 999   ,
   "opacity"   : "0.5"
  }))
   .appendTo("body") && ( $initialized = false );
  // parse each link 
if( this.selector === "a" || defaults.live ) {
  $( document ).on( "click", this.selector, elaborate );
} else {
 this.each(function( index, $link ){
   $( $link ).bind("click", elaborate );
 });
};

 function elaborate( event ) {
    // default click prevent 
     event.preventDefault();  
     var elem    = $( this )
       , message = elem.attr("data-msg") || defaults.template
       , url     = elem.attr("href")
       , target  = elem.attr("target");
       
     if( message ) message = $template( message, url );
       else throw new Error("You should pass a template or text message");
     $container.show();
     $("<div></div>")
      .addClass("away-box")
      .append( message )
      .on("click" , "button", function(e) {
         $container.hide();
         $( this ).parents(".away-box").remove();
         if( $( this ).attr("id") === "ok" ) {
           if( target === "_blank" ) $global.open( url ,'_blank' );
          else $location.assign( url )
         } 
     }).appendTo("body"); 
   }
 }
}));
