import React, { Component } from "react";
import Header from "../LandingPage/Header/Header";
import Nav from "../LandingPage/Nav/Nav";
import CartMain from "./CartMain/CartMain.js";

export class Cart extends Component {
  render() {
    return (
      <div>
        <Header />
        <Nav />
        <CartMain />
      </div>
    );
  }
}

export default Cart;
