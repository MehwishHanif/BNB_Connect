import { csrfFetch } from './csrf';
import { createSelector } from 'reselect';
/*-------------------- Action Type Constants -------------------- */

export const LOAD_SPOTS = "spots/loadSpots";

/*-------------------  Action Creators: ---------------------------*/

export const loadSpots = (spots) => ({
  type: LOAD_SPOTS,
  spots,
});

/*------------------------ Thunk Action Creators ----------------- */
export const getAllSpots = () => async (dispatch) => {
    const response = await csrfFetch('/api/spots');
    const data = await response.json();
    if (response.ok) { 
        console.log(data.Spots);     
        dispatch(loadSpots(data.Spots));      
    }
    return response;
}

/*-------------------------- Selectors --------------------------- */

const selectSpots = (state) => state.spots;

export const selectSpotsArray = createSelector(selectSpots, (spots) =>{
   return Object.values(spots);
});

/*-------------------------- Reducer ---------------------------- */

const spotsReducer = (state = {}, action) => {
    switch (action.type) {
      case LOAD_SPOTS: {
        const spotsState = {};
        action.spots.forEach((spot) => {
            spotsState[spot.id] = spot;
        });
        return spotsState;
      }
      default:
        return state;
    }
  };
  
  export default spotsReducer;