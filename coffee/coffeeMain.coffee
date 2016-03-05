delta ? {}

console.log("coffe loader - main")

require 'coffee/coffeeOne';
require 'coffee/coffeeTwo';
require 'coffee/coffeeThree';

func = ->
	console.log("coffee drinking - Main");

delta.main = func;

delta.main()
delta.one();
delta.three();