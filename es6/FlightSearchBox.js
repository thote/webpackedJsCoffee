"use strict";
import React from 'react';

export default class FlightSearchBox extends React.Component {

  constructor() {
    super();
    this.state = {
      inputText: ""
    };
  }

  onTextChange(event) {
    this.setState({inputText: event.target.value});
    this.props.onChange(event.target.value);
  }

  render() {
    var styles = {
      label: {
        display: 'block',
        paddingBottom: '5px'
      },

      input: {
        height: '30px',
        fontSize: '18px',
        width: '250px'
      }
    };

    return (
      <div>
        <span style={styles.label}>{this.props.label}:</span>
        <input
          style={styles.input}
          onChange={this.onTextChange.bind(this)}
          type="text"
          value={this.state.inputText}
          placeholder={this.props.placeholder}/>
      </div>
    );
  }
}