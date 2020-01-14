import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    return (
      <ul>
        {this.props.reviews
          .filter(review => review.restaurantId === this.props.restaurantId)
          .map(review => (
            <Review
              key={review.id}
              handleDelete={() => this.props.handleDelete(review.id)}
              review={review}
            ></Review>
          ))}
      </ul>
    );
  }
}

export default Reviews;
