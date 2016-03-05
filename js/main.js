if (typeof delta === "undefined" || delta === null) delta = {};

console.log("main.js - loading");

require('js/jsTwo');
require('js/jsOne');

func = function() {
	console.log("js func - main");
}

delta.main = func;

delta.main();
delta.jsOne();
delta.jsTwo();


