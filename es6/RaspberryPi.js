"use strict";

class RaspberryPi {

  constructor() {
    console.log("es6 class RaspberryPi constructor");
  }

  render() {
    console.log("inside RaspberryPi render");
    return "<li> <span> Here is an es6 RaspberryPi retrieved inside CoffeeScript</span> </li>";
  }
}

module.exports = RaspberryPi;