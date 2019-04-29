import React, { Component } from "react";
import "./LoginForm.css";
import { connect } from "react-redux";
import { updateUser } from "../../../../ducks/reducers/authReducer";
import axios from "axios";

export class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: ""
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
    });
  };

  render() {
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
            <button className="login-btn">Login</button>
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
            <button onClick={this.handleRegister} className="register-btn">Register</button>
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
