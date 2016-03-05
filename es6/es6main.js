
import  'libs/jquery.min';

import 'js/jsOne';
import 'js/jsTwo';

import 'coffee/coffeeOne';
import 'coffee/coffeeTwo';
import 'coffee/coffeeThree';

import Clazz from 'es6/Class1';

var main = () => {
	console.log("inside es6 func");
	$(document).ready(function () {
	    $('#content').html('<strong> Hello</strong>');

	    [delta.js.render1, 
	    delta.js.render2,
	    delta.coffee.render1,
	    delta.coffee.render2,
	    delta.coffee.render3,
	    new Clazz().render].forEach((render) => {
	    	$('#features').append(render());
	    });
	});	
}

main();