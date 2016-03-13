'use strict';

import React, {Component} from 'react';

import ReadOnlyInput from "./ReadOnlyInput";

export default class AirportSelectionContainer extends Component {

  render() {
    return (
        <div style={{display: 'block', width: '100%'}}>
          <ReadOnlyInput value="From" style={{float: 'left', width: '48%', marginRight: '5px'}}/>
          <ReadOnlyInput value="To" style={{float: 'right', width: '48%', marginLeft: '5px'}}/>
        </div>
    );
  }
}
