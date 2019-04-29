import React, { Component } from "react";
import Header from "../LandingPage/Header/Header";
import Nav from "../LandingPage/Nav/Nav";
import MainLogin from "./MainLogin/MainLogin";

export class Login extends Component {
  render() {
    return (
      <div>
        <Header />
        <Nav />
        <MainLogin />
      </div>
    );
  }
}

export default Login;
