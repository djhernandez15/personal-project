import React from "react";
import { Switch, Route } from "react-router-dom";
import  Home  from "./components/Home/Home";
// import Register from "./components/Register/Register";
// import Orders from "./components/Orders/Orders";

export default (
  <Switch>
    {/* <Route path="/Login" component={Login} /> */}
    {/* <Route path="/orders" component={Orders} /> */}
    <Route exact path="/" component={Home} />
  </Switch>
);
