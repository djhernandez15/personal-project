import { createStore, compose } from "redux";
import authReducer from "./ducks/reducers/authReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(authReducer, composeEnhancers());
