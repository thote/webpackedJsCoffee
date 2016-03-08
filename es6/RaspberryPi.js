"use strict";

class RaspberryPi {

  render() {
    console.log("inside RaspberryPi render");
    return "<div> <span> Here is an es6 RaspberryPi retrieved inside CoffeeScript</span> </div>";
  }
}

module.exports = RaspberryPi;