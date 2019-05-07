import React, { Component } from "react";
import Header from "../LandingPage/Header/Header";
import Nav from "../LandingPage/Nav/Nav";
import Cart_Main from "./Cart_Main/Cart_Main";

export class Cart extends Component {
  render() {
    return (
      <div>
        <Header />
        <Nav />
        <Cart_Main />
      </div>
    );
  }
}

export default Cart;
