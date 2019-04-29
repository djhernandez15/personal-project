import React from "react";
import { HashRouter } from "react-router-dom";
import routes from "./routes";
import {store} from './store'

function App() {
  return <Provider store={store}><HashRouter>{routes}</HashRouter></Provider>;
}

export default App;
