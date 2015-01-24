# Away.js
Away.js is simple lib to manage your links in your app or site

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
 * {{proto}} - protocol of current link 
 * {{liks}}  - its hostname
 * {{path}}  - pathname 
 * {{s}}     - search
 * {{hash}}  - hash
 * {{this}}  - full href 
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
 
 
