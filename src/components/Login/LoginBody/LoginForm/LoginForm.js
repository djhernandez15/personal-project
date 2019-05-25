import React, { Component } from "react";
import "./LoginForm.css";
import { connect } from "react-redux";
import { updateUser } from "../../../../ducks/reducers/userLogin";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { StatefulInput } from "baseui/input";
import { Button } from "baseui/button";
import { Block } from "baseui/block";
import { styled } from "baseui";

const Centered = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%"
});

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
    const { username, password } = this.state;
    axios.post("/api/login", { username, password }).then(user => {
      this.props.updateUser(user.data);
      this.setState({ redirect: true });
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/profile" />;
    }
    return (
      <Centered>
        <div className="form-container">
          <div className="login-container">
            <form>
              <h3>Login</h3>
              <StatefulInput
                onChange={this.handleUsername}
                placeholder="  Username"
                className="username"
              />
              <br />
              <StatefulInput
                onChange={this.handlePassword}
                type="password"
                placeholder="  Password"
                className="password"
              />
              <br />
              <Button onClick={this.handleLogin} className="login-btn">
                Login
              </Button>
              <Block as="span" marginLeft="scale300" />
            </form>
          </div>

          <div className="register-container">
            <form>
              <h3>Register</h3>
              <StatefulInput
                onChange={this.handleUsername}
                placeholder="  Username"
                className="username"
              />
              <br />
              <StatefulInput
                onChange={this.handleEmail}
                placeholder="  Email"
                className="email"
              />
              <br />
              <StatefulInput
                onChange={this.handlePassword}
                type="password"
                placeholder="  Password"
                className="password"
              />
              <br />
              <Button onClick={this.handleRegister} className="register-btn">
                Register
              </Button>
              <Block as="span" marginLeft="scale300" />
            </form>
          </div>
        </div>
      </Centered>
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
