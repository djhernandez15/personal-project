import React, { Component } from "react";
import Header from "../LandingPage/Header/Header";
import Nav from "../LandingPage/Nav/Nav";
import Main from "./Main/Main";
import "./Main/Main.css";

export class Pants extends Component {
  render() {
    return (
      <div>
        <Header />
        <Nav />
        <Main />
      </div>
    );
  }
}

export default Pants;
