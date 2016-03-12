"use strict";
import React from 'react';

import FlightSearchBox from "es6/FlightSearchBox";

export default class SearchForm extends React.Component {

  constructor() {
    super();
    this.state = {
      origin: "CVG",
      destination: "SFO"
    };
  }

  onOriginChange(origin) {
    console.log("onOriginChange: ", origin);
  }

  onDestinationChange(event) {
    console.log("onDestinationChange");
    this.setState({destination: event.target.value});
  }

  onSearchClick() {
    console.log("Search clicked origin:", this.state.origin, "destination:", this.state.destination);
  }

  render() {
    var styles = {
      container: {
        display: 'block',
        backgroundColor: '#21406f',
        padding: '10px',
        maxWidth: '600px'
      },

      searchForm: {
        backgroundColor: 'white',
        padding: '10px'
      },

      header: {
        textAlign: 'center',
        color: 'green',
        fontSize: '25px',
        padding: '10px'
      },

      placeSelection: {
        display: 'block',
        width: '100%'
      },

      origin: {
        display: 'inline-block',
        float: 'left',
        width: '48%',
        border: 'none',
        borderRadius: '5px',
        boxShadow: '0 0 5px 0 rgba(138,138,138,0.34) inset',
        borderTop: '1px solid #8c8c8c',
        backgroundColor: '#e1e1e1'
      },

      destination: {
        display: 'inline-block',
        float: 'right',
        width: '48%',
        border: 'none',
        borderRadius: '5px',
        boxShadow: '0 0 5px 0 rgba(138,138,138,0.34) inset',
        borderTop: '1px solid #8c8c8c',
        backgroundColor: '#e1e1e1'
      },

      date: {
        display: 'inline-block',
        width: '100%',
        marginTop: '15px',
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
      },

      buttonSection: {
        clear: 'both'
      },

      button: {
        marginTop: '20px',
        height: '30px',
        padding: '10px',
        display: 'block'
      }

    };

    return (
      <div style={styles.container}>

        <div style={styles.searchForm}>

          <div style={styles.header}>WOW! Delta SearchForm UI using react.JS, isn't this cool?</div>

          <div style={styles.placeSelection}>

            <div style={styles.origin}>
              <input style={styles.input} disabled='true' value="From" type="text"/>
            </div>

            <div style={styles.destination}>
              <input style={styles.input}  disabled='true' value="To" type="text"/>
            </div>
          </div>

          <div style={styles.date}>
            <input style={styles.input}  disabled='true' value="SelectDate" type="text"/>
          </div>

          <div style={styles.buttonSection}>
            <button
              style={styles.button}
              type="button">Select Date
            </button>
            <button
              style={styles.button}
              type="button">Search
            </button>
          </div>

        </div>

      </div>
    );
  }
};