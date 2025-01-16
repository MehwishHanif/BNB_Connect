import { csrfFetch } from './csrf';
import { createSelector } from 'reselect';
/*-------------------- Action Type Constants -------------------- */

export const SET_USER = 'session/setUser';
export const REMOVE_USER = 'session/removeUser';
export const LOAD_USER_SPOTS = 'session/loadUserSpots';


/*-------------------  Action Creators: ---------------------------*/

export const setUser = (user) =>  ({
    type: SET_USER,
    user
});

export const removeUser = () =>  ({
    type: REMOVE_USER
});

export const loadUserSpots = (spots) =>  ({
  type: LOAD_USER_SPOTS,
  spots
});

/*-------------------- Selectors ----------------------------------*/

const selectUserSpots = (state) => state.session.spots;

export const selectUserSpotsArray = createSelector(selectUserSpots, (spots) =>{
   return Object.values(spots);
});

// export const selectSpotById = (spotId) => (state) => state.session.spots[spotId]; 

/*------------------------ Thunk Action Creators ----------------- */

export const getUserSpots = () => async (dispatch) => {
    const response = await csrfFetch('/api/spots/current');
    const data = await response.json();
    if (response.ok) {    
        dispatch(loadUserSpots(data.Spots));      
    }
    return response;
}

export const login = (user) => async (dispatch) => {
  const { credential, password } = user;
  const response = await csrfFetch("/api/session", {
    method: "POST",
    body: JSON.stringify({
      credential,
      password,
    }),
  });

  const data = await response.json();

  if (response.ok){   
    dispatch(setUser(data.user));
  }
   
  return response;
};

export const signup = (user) => async (dispatch) => {
  const { username, firstName, lastName, email, password } = user;
  const response = await csrfFetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      username,
      firstName,
      lastName,
      email,
      password,
    }),
  });
  const data = await response.json();

  if (response.ok){
    dispatch(setUser(data.user));
  }
  
  return response;
};

export const logout = () => async (dispatch) => {
  const response = await csrfFetch('/api/session', {
    method: 'DELETE'
  });
  dispatch(removeUser());
  return response;
};

export const restoreUser = () => async (dispatch) => {
  const response = await csrfFetch("/api/session");
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

/*-------------------------- Reducer ---------------------------- */

const initialState = {  user: null , spots: {} };

const sessionReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USER: {
            return {...state, user: action.user}
        }
        case REMOVE_USER: {
            return { ...state, user: null , spots: {} };
        }
        case LOAD_USER_SPOTS: {
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
            } else {
              updatedSpot.avgRating = Number( updatedSpot.avgRating || 0 ).toFixed(1);
            }
            spotsState[updatedSpot.id] = updatedSpot;
          });

          return {
            ...state, 
            spots: spotsState, 
          };
        }
        default:
            return state;
    }
};

export default sessionReducer;