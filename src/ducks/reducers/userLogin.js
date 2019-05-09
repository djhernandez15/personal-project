import axios from "axios";

// import axios from "axios";
const initialState = {
  user: {}
};

//action types
const UPDATE_USER = "UPDATE_USER";
const CHECK_USER_LOGIN = "CHECK_USER_LOGIN";
//action creators
export function updateUser(user) {
  return {
    type: UPDATE_USER,
    payload: user
  };
}
export function checkUser(user) {
  return {
    type: CHECK_USER_LOGIN,
    payload: axios.get("/api/loggedIn").catch(err => {
      console.log(err);
    })
  };
}
//reducer
export default function userLogin(state = initialState, action) {
  switch (action.type) {
    case `${UPDATE_USER}_FULFILLED`:
      return {
        ...state,
        user: action.payload
      };
    case `${CHECK_USER_LOGIN}_FULFILLED`:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}
