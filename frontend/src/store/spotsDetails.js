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
        // console.log(data);     
        dispatch(receiveSpotDetails(data));      
    }
    return response;
}

/*-------------------------- Selectors --------------------------- */

export const selectSpotById = (spotId) => (state) => state.spotsDetails[spotId];


/*-------------------------- Reducer ---------------------------- */
// const initialState = { entries: {}, isLoading: true };

const spotsDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SPOT_DETAILS: {
      const { spot } = action;
      // Add or update the spot in the state
      return {
        ...state,
        [spot.id]: {
          ...state[spot.id], // Preserve existing data if updating
          ...spot,
          SpotImages: [...spot.SpotImages], // Overwrite or set the SpotImages
          Owner: { ...spot.Owner }, // Overwrite or set the Owner
        },
      };
    }
    default:
      return state;
  }
};
  
  export default spotsDetailsReducer;