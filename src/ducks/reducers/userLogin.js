// import axios from "axios";
const initialState = {
  user: {}
};

//action types
const UPDATE_USER = "UPDATE_USER";
//action creators
export function updateUser(user) {
  return {
    type: UPDATE_USER,
    payload: user
  };
}
//reducer
export default function userLogin(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}
