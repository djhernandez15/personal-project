import axios from "axios";

const initialState = {
  username: "",
  cart: []
};

//action types
const UPDATE_USER = "UPDATE_USER";
const CHECK_USER_LOGIN = "CHECK_USER_LOGIN";
const ADD_PRODUCTS = "ADD_PRODUCTS";
const GET_PRODUCTS = "GET_PRODUCTS";
const DELETE_PRODUCTS = "DELETE_PRODUCTS";

//action creators
export function updateUser(username) {
  return {
    type: UPDATE_USER,
    payload: username
  };
}
export function checkUser() {
  return {
    type: CHECK_USER_LOGIN,
    payload: axios.get("/api/loggedIn").catch(err => {
      console.log(err);
    })
  };
}
export function addItemToCart(item) {
  return {
    type: ADD_PRODUCTS,
    payload: axios.post("/api/cart", item).catch(err => {
      console.log(err);
    })
  };
}
export function getCartItems() {
  return {
    type: GET_PRODUCTS,
    payload: axios.get("/api/cart").catch(err => {
      console.log(err);
    })
  };
}
export function deleteItem(item) {
  return {
    type: DELETE_PRODUCTS,
    payload: axios.delete(`/api/cart/${item.sku}`, item)
  };
}

//reducer
export default function userLogin(state = initialState, action) {
  switch (action.type) {
    case `${UPDATE_USER}_FULFILLED`:
      return {
        ...state,
        username: action.payload.data.username,
        cart: action.payload.data.cart
      };
    case `${CHECK_USER_LOGIN}_FULFILLED`:
      return {
        ...state,
        username: action.payload.data.username
      };
    case `${ADD_PRODUCTS}_FULFILLED`:
      return {
        ...state,
        username: action.payload.data.username,
        cart: [...action.payload.data.cart]
      };
    case `${GET_PRODUCTS}_FULFILLED`:
    console.log(action.payload.data)
      return {
        ...state,
        username: action.payload.data.username,
        cart: [...action.payload.data.cart]
      };
    case `${DELETE_PRODUCTS}_FULFILLED`:
      return {
        ...state,
        username: action.payload.data.username,
        cart: [...action.payload.data.cart]
      };

    default:
      return state;
  }
}

//Not MVP
// const EDIT_USER = "EDIT_USER";

// export function editUser(username) {
//   return {
//     type: EDIT_USER,
//     payload: axios.put("/api/profile", { username }).catch(err => {
//       console.log(err);
//     })
//   };
// }

// case `${EDIT_USER}_FULFILLED`:
//   return {
//     ...state,
//     user: action.payload.data.username
//   };
