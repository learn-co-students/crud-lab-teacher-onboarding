
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = { restaurants: [], reviews: []}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      return {
        ...state, 
        restaurants: [...state.restaurants, {id: cuid(), text: action.text}]
      };
    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
      return { ...state, restaurants };
    case 'ADD_REVIEW':
      return {
        ...state, 
        reviews: [...state.reviews, {id: cuid(), text: action.review.text, restaurantId: action.review.restaurantId}]
      };
    case 'DELETE_REVIEW':
      const reviews = state.reviews.filter(review => review.id !== action.id);
      return { ...state, reviews };
    default:
      return state;
  };
};
