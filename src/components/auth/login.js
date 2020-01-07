import React, { Component } from 'react';

import Header from '../header';
import LoginForm from './loginForm';
import history from '../../history';

export default class Login extends Component {
  render() {
    return (
      <div className='login-page'>
        <Header />
        <div className="login-page__left-wrapper">
          <div className="login-page__intro">
            Got issues you have to track? No problem we got you covered. Sign in, or sign up to get started.
          </div>
          <div className="login-page__button-wrapper">
            <a onClick={() => history.push("/register")}>Sign Up</a>
            <a>Recover Password</a>
          </div>
        </div>
        <LoginForm />
      </div>
    );
  }
}
