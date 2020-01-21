import React from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

const Restaurant = props => {
  const { restaurant } = props;

  const handleClick = (event) => {
    props.deleteRestaurant(restaurant.id);
  };

  return (
    <div>
      <li>
        {restaurant.text}
        <button onClick={handleClick}> X </button>
        <ReviewsContainer restaurantId={restaurant.id} />
      </li>
    </div>
  );
};

export default Restaurant;
