# SingleTab
SingleTab prevents users from opening multiple tabs in modern browsers.
If you need to prevent users from opening your page/web application in mutliple windows or tabs, this is solution for you.
Just include SsingleTab into footer of every page which cannot be opened mutliple times and when SingleTab fires your function, display alert or redirect user.
## Known issues
* SingleTab does not work in browsers without Local Storage support
* SingleTab has some issues in Internet Explorer
## How to use SingleTab?
1. Import it: `<script src="singletab.js"></script>`
2. Initialize it: `singleTab.init({ /* parameters */ });`
3. Start: `singleTab.start();`
## Parameters
* *interval* - checking interval in miliseconds (default: 200)
* *storage* - name of local storage (default: singletab-ls)
* *ignoreDate* - if set to 0, "fire" is not fired on the first opened tab (default: 0)
* *fire* - function to fire when multiple tabs detected (fires on every tab when ignoreDate is 1)
* *multifire* - function to fire every time when "check" is called and detects page loaded in multiple tabs (warning: multifire fires approx. every `interval` ms when tabs are detected)
## Example
```
<script>
    singleTab.init({
      fire: function() {
        document.getElementById('result').innerHTML='Hey! Close it!';
      },
      storage: "name",
      interval: 500
    });

    singleTab.start();
</script>
```
## Warning
This is just a quick project - code was not tested in older browsers and you shouldn't rely on it. It might be better to implement some AJAX and Database solution. If user disables Javascript/uses older browser or IE, they can easily bypass SingleTab.
