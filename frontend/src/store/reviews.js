import { csrfFetch } from './csrf';
import { getSpotDetails } from './spotsDetails';
import { createSelector } from 'reselect';
/*-------------------- Action Type Constants -------------------- */

export const LOAD_SPOT_REVIEWS = "reviews/loadSpotReviews";
export const RESET_REVIEWS = "reviews/resetReviews";
export const REMOVE_REVIEW = "reviews/removeReview";

/*-------------------  Action Creators: ---------------------------*/

export const loadSpotReviews = (reviews) => ({
  type: LOAD_SPOT_REVIEWS,
  reviews,
});

export const resetReviews = () => ({
  type: RESET_REVIEWS,
});


export const removeReview = (reviewId) => ({
  type: REMOVE_REVIEW,
  reviewId,
});

/*------------------------ Thunk Action Creators ----------------- */
export const getSpotReviews = (spotId) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}/reviews`);
    const data = await response.json();
    if (response.ok) {    
        dispatch(loadSpotReviews(data.Reviews));      
    }
    return response;
}

export const createReview = ( spotId, review ) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${spotId}/reviews`,{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(review)
  });

  if (response.ok) {
    const review = await response.json();
    
    await dispatch(getSpotDetails(spotId));
    await dispatch(getSpotReviews(spotId));
    return review;
  } else {
    // const  errors = await response.json();
    return response;
  }
}

export const deleteReview = ( reviewId, spotId ) => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews/${reviewId}`,{
    method: 'DELETE',
    headers: {'Content-Type': 'application/json'}
  });

  if (response.ok) {
    const message = await response.json();
    dispatch(removeReview(parseInt(reviewId)));
    await dispatch(getSpotDetails(spotId));    
    return message;
  } else {
    // const  errors = await response.json();
    return response;
  }
}

/*-------------------------- Selectors --------------------------- */

const selectReviews = (state) => state.reviews;

export const selectReviewsArray = createSelector(selectReviews, (reviews) =>{
   return Object.values(reviews);
});

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
      case REMOVE_REVIEW: {
        const newState = { ...state };
        delete newState[action.reviewId];
        return newState;
      }
      default:
        return state;
    }
  };
  
  export default reviewsReducer;