import React, { Component } from "react";
import "./header.css";

export class Header extends Component {
  render() {
    return (
      <header className="nav-container">
        <nav>
          <div>
            <img
              className="barneys-logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzg75OuEH4SEt_YzTSRf8QRCHPRcBV1PzdfGwsiI0XwzrhwSxu"
              alt="barneys-logo"
            />
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
