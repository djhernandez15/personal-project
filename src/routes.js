import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/LandingPage/LandingPage";
import Login from "./components/Login/Login";
import Helmets from "./components/Helmets/Helmets";
import Goggles from "./components/Goggles/Goggles";
import Jerseys from "./components/Jerseys/Jerseys";
import Pants from "./components/Pants/Pants";
import Boots from "./components/Boots/Boots";
import Gloves from "./components/Gloves/Gloves";
import Cart from "./components/Cart/Cart";

export default (
  <Switch>
    <Route path="/cart" component={Cart} />
    <Route path="/gloves" component={Gloves} />
    <Route path="/boots" component={Boots} />
    <Route path="/pants" component={Pants} />
    <Route path="/jerseys" component={Jerseys} />
    <Route path="/goggles" component={Goggles} />
    <Route path="/helmets" component={Helmets} />
    <Route path="/login" component={Login} />
    {/* <Route path="/orders" component={Orders} /> */}
    <Route exact path="/" component={Home} />
  </Switch>
);
