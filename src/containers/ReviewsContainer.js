import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { connect } from 'react-redux';

class ReviewsContainer extends Component {
  handleSubmit = (text, restaurantId) => {
    this.props.dispatch({ review:{text, restaurantId}, type: 'ADD_REVIEW' });
  };

  handleDelete = reviewId => {
    this.props.dispatch({type: 'DELETE_REVIEW', id: reviewId})
  }

  render() {
    return (
      <div>
        <ReviewInput
          restaurantId={this.props.restaurant.id}
          handleSubmit={this.handleSubmit}
        />
        <Reviews
          restaurantId={this.props.restaurant.id}
          reviews={this.props.reviews}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default connect(state => state)(ReviewsContainer);
