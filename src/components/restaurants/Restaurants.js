import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
    return (
      <ul>
        {this.props.restaurants.map(e => (
          <Restaurant key={e.id} handleDelete={this.props.handleDelete} restaurant={e}></Restaurant>
        ))}
      </ul>
    );
  }
}

export default Restaurants;
