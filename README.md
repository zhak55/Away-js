# Away.js
Away.js is simple lib to manage your links in your app or site

### Get started 

```
<script type="text/javascript"> 
 $(function(){
   $("a").away({
    template : "You are going to {{link}}. Are you sure?"
   })
 });
</script>

<!-- in html if you do not define common template like above or want to show smth special -->
<a href="https://www.gmail.com/" data-msg="The hostname is {{link}} with protocol - {{proto}}">Go to Mail</a>
```
### Templating 
##### This plugin use build-in templating with following key-words:
```
 * {{proto}} - protocol of current link 
 * {{liks}}  - its hostname
 * {{path}}  - pathname 
 * {{s}}     - search
 * {{hash}}  - hash
 * {{this}}  - full href 
 ```
