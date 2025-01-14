import { csrfFetch } from './csrf';
// import { createSelector } from 'reselect';
/*-------------------- Action Type Constants -------------------- */

export const LOAD_SPOT_REVIEWS = "reviews/loadSpotReviews";
export const RESET_REVIEWS = "reviews/resetReviews";

/*-------------------  Action Creators: ---------------------------*/

export const loadSpotReviews = (reviews) => ({
  type: LOAD_SPOT_REVIEWS,
  reviews,
});

export const resetReviews = () => ({
  type: RESET_REVIEWS,
});

/*------------------------ Thunk Action Creators ----------------- */
export const getSpotReviews = (spotId) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}/reviews`);
    const data = await response.json();
    if (response.ok) {    
        dispatch(loadSpotReviews(data.Reviews));      
    }
    console.log("DATA: ",data);
    return response;
}

/*-------------------------- Selectors --------------------------- */



/*-------------------------- Reducer ---------------------------- */

const reviewsReducer = (state = {}, action) => {
    switch (action.type) {
      case LOAD_SPOT_REVIEWS: {
        const reviewState = {};
        action.reviews.forEach((review) => {
            reviewState[review.id] = review;
        });
        return reviewState;
      }
      case RESET_REVIEWS: {
        return {};
      }
      default:
        return state;
    }
  };
  
  export default reviewsReducer;