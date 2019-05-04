import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import userLogin from "./ducks/reducers/userLogin";
import products from "./ducks/reducers/products";

const rootReducer = combineReducers({
  userLogin,
  products
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,

  composeEnhancers(applyMiddleware(promiseMiddleware))
);
