import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { checkUser } from "../../../ducks/reducers/userLogin";
import "./Header.css";

export class Header extends Component {
  componentDidMount() {
    this.props.checkUser();
  }
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
const mapStateToProps = reduxState => {
  return {
    username: reduxState.userLogin.username
  };
};

export default connect(
  mapStateToProps,
  { checkUser }
)(Header);
