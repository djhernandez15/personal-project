import React, { Component } from "react";
import Header from "../LandingPage/Header/Header";
import Nav from "../LandingPage/Nav/Nav";
import LoginBody from "./LoginBody/LoginBody";

export class Login extends Component {
  render() {
    return (
      <div>
        <Header />
        <Nav />
        <LoginBody />
      </div>
    );
  }
}

export default Login;
