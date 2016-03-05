if (typeof delta === "undefined" || delta === null) delta = {};


console.log("jsOne.js - laoding");

func = function() {
	console.log("js func - 1");
}

delta.jsOne = func;

