//babel ./src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
//
console.log("app is running")
var template = <p> this is jsx syntax </p>
var appRoot = document.getElementById("app")
ReactDOM.render(template,appRoot); 


