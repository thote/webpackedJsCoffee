'use strict';
import React, {Component} from 'react';

import AirportSelectionContainer from './AirportSelectionContainer';
import DateSelectionContainer from './DateSelectionContainer';
import PassengerCount from './PassengerCount';
import ShopTypeToggle from './ShopTypeToggle';
import SearchButton from './SearchButton';

export default class OneWaySearchForm extends Component {

  render() {
    const styles = {
      searchForm: {
        backgroundColor: 'white',
        padding: '10px',
        marginTop: '30px',
        border: 'none',
        borderRadius: '5px'
      }
    };

    return (
      <div style={styles.searchForm}>

        <AirportSelectionContainer />

        <DateSelectionContainer />

        <PassengerCount />

        <ShopTypeToggle />

        <SearchButton />

      </div>)
  }
}
