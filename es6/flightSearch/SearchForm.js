"use strict";

import React from 'react';

import OneWaySearchForm from './OneWaySearchForm';

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
    const styles = {
      formContainer: {
        display: 'block',
        backgroundColor: '#21406f',
        padding: '10px',
        maxWidth: '600px'
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

        <OneWaySearchForm />

      </div>
    );
  }
};