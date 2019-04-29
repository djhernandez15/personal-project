import React, { Component } from "react";
import  LoginForm  from "./LoginForm/LoginForm";
import "./LoginBody.css";

export class LoginBody extends Component {
  render() {
    return (
      <div className="login-body">
        <LoginForm />
      </div>
    );
  }
}

export default LoginBody;
