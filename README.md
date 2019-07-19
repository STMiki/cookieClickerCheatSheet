# Cookie Clicker Cheat Sheet

Nothing too serious, just go to [cookie clicker](https://orteil.dashnet.org/cookieclicker/), open the console (F12 or Ctrl + Shift + J)

And copy/past this code :
```js
var script = document.createElement('script');
script.id = "CheatSheetScript";
document.getElementsByTagName('head')[0].appendChild(script);
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById('CheatSheetScript').innerHTML = this.responseText;
  }
};
xhttp.open("GET", "https://raw.githubusercontent.com/STMiki/cookieClickerCheatSheet/master/src/main.js", true);
xhttp.send();
```

You will see something like this pop in your Store :

![alt text](https://github.com/STMiki/cookieClickerCheatSheet/blob/master/img0.png "Cheat Sheet")

Enjoy !
