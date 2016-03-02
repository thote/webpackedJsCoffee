if (typeof delta === "undefined" || delta === null) delta = {};


console.log("jsTwo.js - loading");

func = function() {
	console.log("js func - 2");
}

delta.two = func;

