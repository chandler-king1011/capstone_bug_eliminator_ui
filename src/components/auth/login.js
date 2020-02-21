import React, { Component } from 'react';
import { connect } from "react-redux";

import * as actions from "../../actions"
import Header from '../header';
import Footer from '../footer';
import LoginForm from './loginForm';
import history from '../../history';

class Login extends Component {

  constructor() {
    super();

    this.handleLoginSubmit=this.handleLoginSubmit.bind(this);
  }

  handleLoginSubmit(userCredentials) {
    this.props.login(userCredentials);
  }

  componentWillMount() {
    this.props.clearLoginFailed();
    if (this.props.userToken != "") {
      history.push('/user-dashboard');
    }
  } 

  render() {
    return (
      <div className='login-page'>
        <Header linkTwoName="Forgot Password" linkTwo="/reset-password/request" linkOne="/register" linkOneName="Not registered? Sign Up!" />
        <div className="login-page__content-wrapper">
          <div className="login-page__left-wrapper">
            <div className="login-page__intro">
              Got issues you have to track? No problem we got you covered. Sign in, or sign up to get started.
            </div>
            <div className="login-page__button-wrapper">
              <button onClick={() => history.push("/register")}>Sign Up</button>
              <button onClick={() => history.push("/reset-password/request")}>Reset Password</button>
            </div>
          </div>
          <LoginForm 
            handleLoginSubmit={this.handleLoginSubmit}
            loginErrorText={this.props.loginErrorText}
            clearError={this.props.clearLoginFailed} 
          />
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { loginErrorText, userToken } = state.userReducer;
  return {
    loginErrorText,
    userToken
  }
}


export default connect(mapStateToProps, actions)(Login);
