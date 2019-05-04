import axios from "axios";
const initialState = {
  helmets: [],
  goggles: [],
  jerseys: [],
  pants: [],
  boots: [],
  gloves: []
};

//action types
const GET_HELMETS = "GET_HELMETS";
//action creators
export function getHelmets(helmets) {
  return {
    type: GET_HELMETS,
    payload: axios.get("/api/helmets").catch(err => {
      console.log(err);
    })
  };
}
//reducer
export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_HELMETS}_FULFILLED`:
      return {
        ...state,
        helmets: [...action.payload.data]
      };
    default:
      return state;
  }
}
