delta ? {}
delta.coffee = delta.coffee ? {}
console.log("coffee loader - 2")

RaspberryPi = require 'es6/RaspberryPi';
console.log('raspberryPi', RaspberryPi)

#CoffeeFour = require 'coffee/CoffeeFour'
#console.log('coffeeFour', CoffeeFour)

render = ->
#  four = new CoffeeFour "four"
#  four.render();
  rasp = new RaspberryPi "four"
  rasp.render();

delta.coffee.render2 = render;