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

  const data = await response.json();

  if (response.ok){   
    dispatch(setUser(data.user));
  }
   
  return response;
};

export const restoreUser = () => async (dispatch) => {
  const response = await csrfFetch("/api/session");
  const data = await response.json();
  dispatch(setUser(data.user));
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