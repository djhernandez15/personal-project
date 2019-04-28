import React, { Component } from "react";
import "./header.css";

export class Header extends Component {
  render() {
    return (
      <header className="header-container">
        <div>
          <img
            className="barneys-logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzg75OuEH4SEt_YzTSRf8QRCHPRcBV1PzdfGwsiI0XwzrhwSxu"
            alt="barneys-logo"
          />
        </div>
        <div>Home</div>
        <div>Login/Register</div>

        <div>
          <i class="fas fa-shopping-cart" />
        </div>
      </header>
    );
  }
}

export default Header;
