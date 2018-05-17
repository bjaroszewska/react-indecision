"use strict";

//babel ./src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
//
console.log("app is running");
var template = React.createElement(
  "p",
  null,
  " this is jsx syntax "
);
var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
