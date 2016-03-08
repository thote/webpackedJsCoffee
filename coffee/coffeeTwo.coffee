delta ? {}
delta.coffee = delta.coffee ? {}
console.log("coffee loader - 2")

RaspberryPi = require 'es6/RaspberryPi';

render = ->
  rasp = new RaspberryPi "four"
  rasp.render();

delta.coffee.render2 = render;