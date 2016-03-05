
import 'js/jsOne';
import 'js/jsTwo';

import 'coffee/coffeeOne';
import 'coffee/coffeeTwo';
import 'coffee/coffeeThree';

import Clazz from 'es6/Class1';

var main = () => {
	console.log("inside es6 func");

	var clazz = new Clazz();
	clazz.doSomething();

	delta.jsOne();
	delta.jsTwo();

	delta.one();
	delta.two();
	delta.three();
}

main();