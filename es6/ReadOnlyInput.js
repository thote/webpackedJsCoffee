"use strict";

import React from 'react';
import _ from 'underscore';

export default class ReadOnlyInput extends React.Component {

  render() {
    var styles = {
      container: {
        display: 'inline-block',
        width: '100%',
        border: 'none',
        borderRadius: '5px',
        boxShadow: '0 0 5px 0 rgba(138,138,138,0.34) inset',
        borderTop: '1px solid #8c8c8c',
        backgroundColor: '#e1e1e1'
      },

      input: {
        padding: '8px 20px',
        fontSize: '14px',
        width: '100%',
        border: 'none',
        color: 'black',
        backgroundColor: 'transparent'
      }
    };

    const extendedContainerStyles = _.extend(styles.container, this.props.style);
    return (
      <div style={extendedContainerStyles}>
        <input style={styles.input} disabled='true' value={this.props.value} type="text"/>
      </div>
    );
  }
}