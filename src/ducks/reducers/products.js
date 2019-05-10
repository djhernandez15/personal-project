import axios from "axios";
const initialState = {
  helmets: [],
  goggles: [],
  jerseys: [],
  pants: [],
  boots: [],
  gloves: []
  // cart: []
};

//action types
const GET_HELMETS = "GET_HELMETS";
const GET_GOGGLES = "GET_GOGGLES";
const GET_JERSEYS = "GET_JERSEYS";
const GET_PANTS = "GET_PANTS";
const GET_BOOTS = "GET_BOOTS";
const GET_GLOVES = "GET_GLOVES";
// const ADD_PRODUCTS = "ADD_PRODUCTS";
// const GET_PRODUCTS = "GET_PRODUCTS";
// const DELETE_PRODUCTS = "DELETE_PRODUCTS";
// const GET_SUBTOTAL = "GET_SUBTOTAL";
//action creators
export function getHelmets() {
  return {
    type: GET_HELMETS,
    payload: axios.get("/api/helmets").catch(err => {
      console.log(err);
    })
  };
}
export function getGoggles() {
  return {
    type: GET_GOGGLES,
    payload: axios.get("/api/goggles").catch(err => {
      console.log(err);
    })
  };
}
export function getJerseys() {
  return {
    type: GET_JERSEYS,
    payload: axios.get("/api/jerseys").catch(err => {
      console.log(err);
    })
  };
}
export function getPants() {
  return {
    type: GET_PANTS,
    payload: axios.get("/api/pants").catch(err => {
      console.log(err);
    })
  };
}
export function getBoots() {
  return {
    type: GET_BOOTS,
    payload: axios.get("/api/boots").catch(err => {
      console.log(err);
    })
  };
}
export function getGloves() {
  return {
    type: GET_GLOVES,
    payload: axios.get("/api/gloves").catch(err => {
      console.log(err);
    })
  };
}
// export function addItemToCart(item) {
//   return {
//     type: ADD_PRODUCTS,
//     payload: axios.post("/api/cart", item).catch(err => {
//       console.log(err);
//     })
//   };
// }
// export function getCartItems() {
//   return {
//     type: GET_PRODUCTS,
//     payload: axios.get("/api/cart").catch(err => {
//       console.log(err);
//     })
//   };
// }
// export function deleteItem(item) {
//   return {
//     type: DELETE_PRODUCTS,
//     payload: axios.delete(`/api/cart/${item.sku}`, item)
//   };
// }
//reducer
export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_HELMETS}_FULFILLED`:
      return {
        ...state,
        helmets: [...action.payload.data]
      };
    case `${GET_GOGGLES}_FULFILLED`:
      return {
        ...state,
        goggles: [...action.payload.data]
      };
    case `${GET_JERSEYS}_FULFILLED`:
      return {
        ...state,
        jerseys: [...action.payload.data]
      };
    case `${GET_PANTS}_FULFILLED`:
      return {
        ...state,
        pants: [...action.payload.data]
      };
    case `${GET_BOOTS}_FULFILLED`:
      return {
        ...state,
        boots: [...action.payload.data]
      };
    case `${GET_GLOVES}_FULFILLED`:
      return {
        ...state,
        gloves: [...action.payload.data]
      };
    // case `${ADD_PRODUCTS}_FULFILLED`:
    //   return {
    //     ...state,
    //     cart: [...action.payload.data]
    //   };
    // case `${GET_PRODUCTS}_FULFILLED`:
    //   return {
    //     ...state,
    //     cart: [...action.payload.data]
    //   };
    // case `${DELETE_PRODUCTS}_FULFILLED`:
    //   return {
    //     ...state,
    //     cart: [...action.payload.data]
    //   };
    default:
      return state;
  }
}
