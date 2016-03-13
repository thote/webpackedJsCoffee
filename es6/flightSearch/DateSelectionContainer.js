'use strict';

import React, {Component} from 'react';

import ReadOnlyInput from "./ReadOnlyInput";

export default class DateSelectionContainer extends Component {

  render() {
    return (
      <ReadOnlyInput value="Select Date" style={{marginTop: '15px'}}/>
    );
  }
}
