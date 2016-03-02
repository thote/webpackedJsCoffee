if (typeof delta === "undefined" || delta === null) {
	delta = {};
}

require('./coffeeOne');
require('./coffeeTwo');
require('./coffeeThree');


console.log("js coffee loader - main");


var func = function() {
	console.log("coffee drinking - Main1");
}

delta.main = func;

delta.main();
delta.one();
delta.three();