"uses strict";

import React from 'react';

export default class Counter extends React.Component {

  render() {
    var styles = {
      passengersContainer: {
        paddingTop: '15px'
      },

      passengersLabel: {
        fontSize: '12px',
        letterSpacing: '1px',
        color: '#a6a6ad'
      },

      passengersCounter: {
        paddingTop: '15px'
      },

      counterButton: {
        padding: '6px 10px'
      },

      counterLabel: {
        padding: '10px 25px'
      }
    };

    return (
      <div style={styles.passengersContainer}>

        <label style={styles.passengersLabel}>PASSENGERS</label>

        <div style={styles.passengersCounter}>
          <button style={styles.counterButton} type="button"> +</button>
          <label style={styles.counterLabel}>1</label>
          <button style={styles.counterButton} type="button"> -</button>
        </div>

      </div>
    );
  }
}