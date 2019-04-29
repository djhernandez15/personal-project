import React, { Component } from "react";
import "./LoginForm.css";

export class LoginReg extends Component {
  render() {
    return (
      <body className="form-container">
        <div className="login-container">
          <form>
            Login
            <input placeholder="  Email" id="email" />
            <input type="password" placeholder="  Password" id="password" />
            <button>Login</button>
          </form>
        </div>||||||
        <div className="register-container">
          <form>
            Register
            <input placeholder="  Username" id="username" />
            <input placeholder="  Email" id="email" />
            <input type="password" placeholder="  Password" id="password" />
            <button>Register</button>
          </form>
        </div>
      </body>
    );
  }
}

export default LoginReg;
