if (typeof delta === "undefined" || delta === null) delta = {};

console.log("main.js - loading");

require('./jsTwo');
require('./jsOne');

func = function() {
	console.log("js func - main");
}

delta.main = func;

delta.main();
delta.one();
delta.two();

