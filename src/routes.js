import React from "react";
import { Switch, Route } from "react-router-dom";
import  Home  from "./components/LandingPage/LandingPage";
import Login from "./components/Login/Login";

// import Register from "./components/Register/Register";
// import Orders from "./components/Orders/Orders";

export default (
  <Switch>
    <Route path="/login" component={Login} />
    {/* <Route path="/orders" component={Orders} /> */}
    <Route exact path="/" component={Home} />
  </Switch>
);
