import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(
  state = { restaurants: [], reviews: [] },
  action
) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const restaurants = [
        ...state.restaurants,
        {
          text: action.text,
          id: cuid(),
        },
      ];
      return { ...state, restaurants };
    case 'DELETE_RESTAURANT':
      return {
        ...state,
        restaurants: state.restaurants.filter(e => e.id !== action.id),
      };
    case 'ADD_REVIEW':
      const reviews = [
        ...state.reviews,
        {
          text: action.review.text,
          restaurantId: action.review.restaurantId,
          id: cuid(),
        },
      ];
      return { ...state, reviews };
    case 'DELETE_REVIEW':
      return {
        ...state,
        reviews: state.reviews.filter(e => e.id !== action.id),
      };
      return state;
    default:
      return state;
  }
}
