import React, { Component } from "react";
import Nav from "../LandingPage/Nav/Nav";
import Header from "../LandingPage/Header/Header";
import Main from "./Main/Main";
import "./Main/Main.css";

export class Helmets extends Component {
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

export default Helmets;
