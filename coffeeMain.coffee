delta ? {}

console.log("coffe loader - main")

require './coffeeOne';
require './coffeeTwo';
require './coffeeThree';

func = ->
	console.log("coffee drinking - Main");

delta.main = func;

delta.main()
delta.one();
delta.three();