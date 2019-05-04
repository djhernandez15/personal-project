import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Nav extends Component {
  render() {
    return (
      <div className="nav-container">
        <Link to="/helmets">
          <div className="helmets-link">Helmets</div>
        </Link>
        <Link to="/goggles">
          <div className="goggles-link">Goggles</div>
        </Link>
        <Link to="jerseys">
          <div className="jerseys-link">Jerseys</div>
        </Link>
        <Link to="pants">
          <div className="pants-link">Pants</div>
        </Link>
        <Link to="boots">
          <div className="boots-link">Boots</div>
        </Link>
        <Link to="gloves">
          <div className="gloves-link">Gloves</div>
        </Link>
      </div>
    );
  }
}

export default Nav;
