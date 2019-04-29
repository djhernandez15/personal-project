import React, { Component } from "react";
import "./LoginForm.css";
import { connect } from "react-redux";
import { updateUser } from "../../../../ducks/reducers/authReducer";
import axios from "axios";
import { Redirect } from "react-router-dom";

export class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      redirect: false
    };
  }

  handleUsername = e => {
    this.setState({
      username: e.target.value
    });
  };
  handleEmail = e => {
    this.setState({ email: e.target.value });
  };
  handlePassword = e => {
    this.setState({ password: e.target.value });
  };

  handleRegister = () => {
    const { username, password, email } = this.state;
    axios.post("/api/register", { username, email, password }).then(user => {
      this.props.updateUser(user.data);
      this.setState({ redirect: true });
    });
  };

  handleLogin = () => {
    const { email, password } = this.state;
    axios.post("/api/login", { email, password }).then(res => {
      this.props.updateUser(res.data);
      this.setState({ redirect: true });
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div className="form-container">
        <div className="login-container">
          <form>
            Login
            <input
              onChange={this.handleEmail}
              placeholder="  Email"
              className="email"
            />
            <input
              onChange={this.handlePassword}
              type="password"
              placeholder="  Password"
              className="password"
            />
            <button onClick={this.handleLogin} className="login-btn">
              Login
            </button>
          </form>
        </div>
        ||||||
        <div className="register-container">
          <form>
            Register
            <input
              onChange={this.handleUsername}
              placeholder="  Username"
              className="username"
            />
            <input
              onChange={this.handleEmail}
              placeholder="  Email"
              className="email"
            />
            <input
              onChange={this.handlePassword}
              type="password"
              placeholder="  Password"
              className="password"
            />
            <button onClick={this.handleRegister} className="register-btn">
              Register
            </button>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = reduxState => {
  return {
    user: reduxState.user
  };
};
export default connect(
  mapStateToProps,
  { updateUser }
)(LoginForm);
