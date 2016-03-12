"use strict";
import React from 'react';

import ReadOnlyInput from "es6/ReadOnlyInput";
import Counter from 'es6/PassengerCount';
import MilesToggle from 'es6/MilesToggle';

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
            <ReadOnlyInput value="From" style={{float: 'left', width: '48%', marginRight: '5px'}}/>
            <ReadOnlyInput value="To" style={{float: 'right', width: '48%', marginLeft: '5px'}}/>
          </div>

          <ReadOnlyInput value="Select Date" style={{marginTop: '15px'}} />

          <Counter />

          <MilesToggle />

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