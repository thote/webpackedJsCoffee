"uses strict";

import React from 'react';

export default class ShopTypeToggle extends React.Component {

  render() {
    var styles = {
      milesToggleContainer: {
        paddingTop: '15px',
        float: 'right'
      },

      passengersLabel: {
        fontSize: '12px',
        letterSpacing: '1px',
        color: '#a6a6ad'
      },

      toggleButtonsSection: {
        paddingTop: '10px'
      }
    };

    return (
      <div style={styles.milesToggleContainer}>
        <label style={styles.passengersLabel}>SHOW PRICE IN</label>
        <div style={styles.toggleButtonsSection}>
          <div id="miles_money_toggle">
            <label>
              <input checked="true" name="toggle" type="radio" />
              <label for="search_by_revenue">Money</label>
            </label>
            <label>
              <input name="toggle" type="radio" />
              <label for="search_by_miles">Miles</label>
            </label>
          </div>
        </div>
      </div>
    );
  }
}