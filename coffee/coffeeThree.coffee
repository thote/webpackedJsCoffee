delta ? {}
delta.coffee = delta.coffee ? {}

console.log "coffee loader - 3"
CoffeeFour = require 'coffee/CoffeeFour'

render = ->
  four = new CoffeeFour
  four.render();

delta.coffee.render3 = render;