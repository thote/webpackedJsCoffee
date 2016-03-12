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
      formContainer: {
        display: 'block',
        backgroundColor: '#21406f',
        padding: '10px',
        maxWidth: '600px'
      },

      searchForm: {
        backgroundColor: 'white',
        padding: '10px',
        marginTop: '30px',
        border: 'none',
        borderRadius: '5px'
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

      passengersContainer: {
        paddingTop: '15px',
        float: 'left'
      },

      passengersLabel: {
        fontSize: '12px',
        letterSpacing: '1px',
        color: '#a6a6ad'
      },

      passengersCounter: {
        paddingTop: '10px'
      },

      counterButton: {
        padding: '6px 10px'
      },

      counterLabel: {
        padding: '10px 25px'
      },

      milesToggleContainer: {
        paddingTop: '15px',
        float: 'right'
      },

      toggleButtonsSection: {
        paddingTop: '10px'
      },

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
      },

      formTitle: {
        display: 'block',
        paddingTop: '25px',
        color: 'white',
        fontWeight: '300',
        fontSize: '24px'
      },

      subTitle: {
        color: 'white',
        fontWeight: '300',
        fontSize: '10px'
      },

      reactTitle: {
        display: 'block',
        color: 'white',
        fontWeight: '300',
        fontSize: '24px',
        textAlign: 'center'
      }
    };

    return (
      <div style={styles.formContainer}>

        <label style={styles.reactTitle}>Search form using react.JS</label>
        <label style={styles.formTitle}>BOOK A FLIGHT</label>
        <label style={styles.subTitle}><strong>BEST FARE</strong> GUARANTEE</label>

        <div style={styles.searchForm}>

          <div style={styles.placeSelection}>

            <div style={styles.origin}>
              <input style={styles.input} disabled='true' value="From" type="text"/>
            </div>

            <div style={styles.destination}>
              <input style={styles.input}  disabled='true' value="To" type="text"/>
            </div>
          </div>

          <div style={styles.date}>
            <input style={styles.input}  disabled='true' value="Select Date" type="text"/>
          </div>

          <div style={styles.passengersContainer}>
            <label style={styles.passengersLabel}>PASSENGERS</label>

            <div style={styles.passengersCounter}>
              <button style={styles.counterButton} type="button"> + </button>
              <label style={styles.counterLabel}>1</label>
              <button style={styles.counterButton} type="button"> - </button>
            </div>
          </div>

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

          <div style={styles.buttonSection}>
            <button
              style={styles.button}
              type="button">Find Flights
            </button>
          </div>

        </div>

      </div>
    );
  }
};