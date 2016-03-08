if (typeof delta === "undefined" || delta === null) delta = {};
delta.js = delta.js || {};

console.log("jsOne.js - laoding");

render = function() {
	console.log("js func - 1");
	return '<li> This is venilla JS-1</li>';
}

delta.js.render1 = render;

