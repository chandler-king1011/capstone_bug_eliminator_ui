import React, { Component } from 'react';

import LoginForm from './loginForm';

export default class Login extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Bug Eliminator</h1>
        <LoginForm />
      </div>
    );
  }
}
