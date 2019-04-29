import React, { Component } from 'react'
import LoginReg from './Login/LoginForm';
import './MainLogin.css'

export class MainLogin extends Component {
  render() {
    return (
      <div className='login-body'>
        <LoginReg/>
      </div>
    )
  }
}

export default MainLogin
