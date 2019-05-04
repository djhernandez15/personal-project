import React, { Component } from "react";

export class Nav extends Component {
  render() {
    return (
      <div className="nav-container">
        <div className="helmets-link">Helmets</div>
        <div className="goggles-link">Goggles</div>
        <div className="jerseys-link">Jerseys</div>
        <div className="pants-link">Pants</div>
        <div className="boots-link">Boots</div>
        <div className="gloves-link">Gloves</div>
      </div>
    );
  }
}

export default Nav;
