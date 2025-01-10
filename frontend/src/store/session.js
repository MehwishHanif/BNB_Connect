import { csrfFetch } from './csrf';
/*-------------------- Action Type Constants -------------------- */

export const SET_USER = 'session/setUser';
export const REMOVE_USER = 'session/removeUser';

/*-------------------  Action Creators: ---------------------------*/

export const setUser = (user) =>  ({
    type: SET_USER,
    user
});

export const removeUser = () =>  ({
    type: REMOVE_USER
});

/*------------------------ Thunk Action Creators ----------------- */

export const login = (user) => async (dispatch) => {
  const { credential, password } = user;
  const response = await csrfFetch("/api/session", {
    method: "POST",
    body: JSON.stringify({
      credential,
      password,
    }),
  });

  if (response.ok){
    const data = await response.json();
    dispatch(setUser(data.user));
  } else {
    const errors = await response.json();
  }  
  return response;
};

/*-------------------------- Reducer ---------------------------- */

const initialState = {  user: null };

const sessionReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USER: {
            return {...state, user: action.user}
        }
        case REMOVE_USER: {
            return { ...state, user: null };
        }
        default:
            return state;
    }
};

export default sessionReducer;