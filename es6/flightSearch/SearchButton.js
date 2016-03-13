'use strict';

import React, {Component} from 'react';

import ReadOnlyInput from "./ReadOnlyInput";

export default class SearchButton extends Component {

  render() {
    const styles = {
      buttonSection: {
        clear: 'both',
        paddingTop: '20px'
      },

      button: {
        width: '100%',
        fontSize: '14px',
        fontWeight: '600',
        height: '39px',
        padding: '10px',
        border: 'none',
        borderRadius: '5px',
        color: 'white',
        background: '-webkit-gradient(linear, left top, left bottom, color-stop(0.25, #e00026), color-stop(1, #8d0000))'
      }
    };

    return (
      <div style={styles.buttonSection}>
        <button
          style={styles.button}
          type="button">Find Flights
        </button>
      </div>
    );
  }
}
