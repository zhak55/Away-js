# Away.js
Away.js is simple lib to manage your links in your app or site

### Installation
##### Put this into the page: 
```
     <script src="http://code.jquery.com/jquery-1.11.2.min.js" type="text/javascript"></script>
     <script src="away.js" type="text/javascript"></script>  
     <link rel="stylesheet" type="text/css" href="away.css" />  
```

### Get started 

```
<script type="text/javascript"> 
 $(function(){
 // it wil be applied to all a tags in your page 
   $("a").away({
    template : "You are going to {{link}}. Are you sure?"
   })
 });
</script>

<!-- in html if you do not define common template like above or want to show smth special -->
<a href="https://www.gmail.com/" data-msg="The hostname is {{link}} with protocol - {{proto}}">Go to Mail</a>
```
### Templating 
##### This plugin uses build-in templating with following key-words

```
 * {{proto}} - protocol of current link* // => "http:"
 * {{link}}  - its hostname              // => "foo.com"
 * {{path}}  - pathname                  // => "/path/"
 * {{s}}     - search                    // => "?search=away"
 * {{hash}}  - hash                      // => "#hash"
 * {{port}}  - port                      // => "1337"
 * {{host}}  - host                      // => "foo.com:1337"
 * {{this}}  - full href 
 ```
 ```
 *"http://foo.com:1337/path/?search=away#hash"
  ```
  
##### It's possible to use html tags:
  ```
 <a href="https://www.bar.com" data-msg="Go to external address <b>{{link}}</b>?">Go to Mail</a>
 ```
 
### Settings 
 
 ```
 {
    // the default template that will be used for all a tags
    template : "You are going to {{link}}. Are you sure?" ,
    // change default name of buttons 
    btn : {
     ok     : "I agree"    ,
     cancel : "I disagree" 
     } ,
     // if you do not use selector <a> where live:true is default, 
     // set true in order to attach an event handler for all elements which match 
     // the current selector, now and in the future
     live : true 
   }
 ```
 
### Notes
 
 * if  ``` <a>  ``` contains atrribute [target = _blank], the link will be displayed in new browser blank
 * if  ``` <a>  ```  does not contain this attribute - will be used method .assign of location object( history is saved in browser )
 * Template or text message as a parameter or defined in html is required
 
 
