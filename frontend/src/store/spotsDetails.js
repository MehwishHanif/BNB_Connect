import { csrfFetch } from './csrf';
// import { createSelector } from 'reselect';

/*-------------------- Action Type Constants -------------------- */

export const RECEIVE_SPOT_DETAILS = "spotDetails/receiveSpotDetails";

/*-------------------  Action Creators: ---------------------------*/

export const receiveSpotDetails = (spot) => ({
  type: RECEIVE_SPOT_DETAILS,
  spot,
});

/*------------------------ Thunk Action Creators ----------------- */
export const getSpotDetails = (spotId) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}`);
    const data = await response.json();
    if (response.ok) {     
        dispatch(receiveSpotDetails(data));      
    }
    return data;
}

/*-------------------------- Selectors --------------------------- */

export const selectSpotById = (spotId) => (state) => state.spotsDetails[spotId];


/*-------------------------- Reducer ---------------------------- */


const spotsDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SPOT_DETAILS: {
      const { spot } = action;
      
      return {
        ...state,
        [spot.id]: {
          ...state[spot.id], 
          ...spot,
          SpotImages: [...spot.SpotImages], 
          Owner: { ...spot.Owner },
          avgStarRating:typeof spot.avgStarRating === "number" 
          ? spot.avgStarRating.toFixed(1) 
          : (spot.avgStarRating === null ? 0.0 : Number(spot.avgStarRating || 0).toFixed(1)),
          price: spot.price.toFixed(2),
        },
      };
    }
    default:
      return state;
  }
};
  
  export default spotsDetailsReducer;