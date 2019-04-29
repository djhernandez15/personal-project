import React, { Component } from "react";
import Header from "./Header/Header";
import Nav from "./Nav/Nav";
import Main from "./Main/Main";
import './Nav/Nav.css'
import './Main/Main.css'


export class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Nav />
        <Main/>
      </div>
    );
  }
}

export default Home;
