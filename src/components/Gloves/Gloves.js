import React, { Component } from "react";
import Header from "../LandingPage/Header/Header";
import Nav from "../LandingPage/Nav/Nav";
import Main from "./Main/Main";

export class Gloves extends Component {
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

export default Gloves;
