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
        dispatch(loadSpots(data.Spots));      
    }
    return response;
}


export const createSpot = (spot, spotImages) => async (dispatch) => {
  const response = await csrfFetch('/api/spots',{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(spot)
  });

  const spotData = await response.json();

  if (response.ok) {   
    for (const spotImage of spotImages) {
        await dispatch(addImagesToSpot(spotData.id, spotImage));              
    }
    return spotData;
  }

  return response;
}

export const addImagesToSpot = (spotId, spotImage) => async () => {
  const response = await csrfFetch(`/api/spots/${spotId}/images`,{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(spotImage)
  });

  const data = await response.json();
  if (response.ok) {    
     return data.id;     
  } else {
      return data;
  }
  
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
          const updatedSpot = { ...spot };
          if (typeof updatedSpot.price === "number") {
            updatedSpot.price = updatedSpot.price.toFixed(2);
          }
          if (updatedSpot.avgRating === null) {
            updatedSpot.avgRating = 0.0;
          } else if (typeof updatedSpot.avgRating === "number") {
            updatedSpot.avgRating = updatedSpot.avgRating.toFixed(1);
          }
          spotsState[spot.id] = updatedSpot;
        });
        return spotsState;
      }
      default:
        return state;
    }
  };
  
  export default spotsReducer;