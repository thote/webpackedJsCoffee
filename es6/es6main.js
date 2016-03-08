"use strict";
import  'libs/jquery.min';

import 'js/jsOne';
import 'js/jsTwo';

import 'coffee/coffeeOne';
import 'coffee/coffeeTwo';
import 'coffee/coffeeThree';

import Clazz from 'es6/Class1';

import React from 'react';
import ReactDOM from 'react-dom';

import ArduinoComponent from 'es6/ArduinoComponent';

import 'html/partial1.html';
import 'styles/global.css';

var main = () => {
	console.log("inside es6 func");
	$(document).ready(function () {
	    [delta.js.render1, 
	    delta.js.render2,
	    delta.coffee.render1,
	    delta.coffee.render2,
	    delta.coffee.render3,
	    new Clazz().render].forEach((render) => {
	    	$('#features').append(render());
	    });

	    ReactDOM.render(
	    	<ArduinoComponent />, 
	    	document.getElementById('react_content')
);
	});	
};

main();