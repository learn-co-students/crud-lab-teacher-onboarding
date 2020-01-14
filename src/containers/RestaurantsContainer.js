import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';
import { connect } from 'react-redux';

class RestaurantsContainer extends Component {
  render() {
    return (
      <div>
        <RestaurantInput
          handleSubmit={text =>
            this.props.dispatch({ text, type: 'ADD_RESTAURANT' })
          }
        />
        <Restaurants
          restaurants={this.props.restaurants}
          handleDelete={(id) => this.props.dispatch({id, type: 'DELETE_RESTAURANT'})}
        />
      </div>
    );
  }
}

export default connect(state => state)(RestaurantsContainer);
