"use strict"
import React from 'react';

export default class ArduinoComponent extends React.Component {

	constructor() {
		super();
		this.arduinoImage = "http://arduinohistory.github.io/images/full/WiringPrototype1-JavelinStamp.jpg";
	}

  render() {

  	var styles = {
      image: {
        width: '300px',
        height: '300px',
      }
    };

    return (
    	<div>
       <span> Here is an Arduino board rendered using reactJS</span>
       <img src={this.arduinoImage} style={styles.image} />
    	</div>
    );
  }
}