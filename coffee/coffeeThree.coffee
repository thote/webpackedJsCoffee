delta ? {}
delta.coffee = delta.coffee ? {}

console.log "coffee loader - 3"
FilterCoffee = require 'coffee/FilterCoffee'

render = ->
  four = new FilterCoffee
  four.render();

delta.coffee.render3 = render;