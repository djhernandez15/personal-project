import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export class Header extends Component {
  render() {
    return (
      <header className="header-container">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="logo">Brraaap!</div>
        </Link>
        <div className="links">
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="home-link">Home</div>
          </Link>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <div className="login-link">Login/Register</div>
          </Link>
        </div>

        <div>
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <i className="fas fa-shopping-cart" />
          </Link>
        </div>
      </header>
    );
  }
}

export default Header;
