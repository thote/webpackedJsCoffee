if (typeof delta === "undefined" || delta === null) delta = {};
delta.js = delta.js || {};

console.log("jsTwo.js - loading");

render = function() {
	console.log("js func - 2");
	return '<li> This is venilla JS-2 </li>';
};

delta.js.render2 = render;

