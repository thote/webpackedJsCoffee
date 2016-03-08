"use strict";

export default class Beaglebone {

  constructor() {
    console.log("es6 class Beaglebone constructor");
  }

  render() {
    console.log("inside Beaglebone render");
    return "<li> <span> Here is an es6 Beaglebone</span> </li>";
  }
}