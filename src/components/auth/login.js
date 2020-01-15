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
    if (this.props.userToken != "") {
      history.push('/user-dashboard');
    }

  }

  render() {
    return (
      <div className='login-page'>
        <Header linkOneName="Learn More" linkTwo="/register" linkTwoName="Not registered? Sign Up!" />
        <div className="login-page__content-wrapper">
          <div className="login-page__left-wrapper">
            <div className="login-page__intro">
              Got issues you have to track? No problem we got you covered. Sign in, or sign up to get started.
            </div>
            <div className="login-page__button-wrapper">
              <button onClick={() => history.push("/register")}>Sign Up</button>
              <button>Recover Password</button>
            </div>
          </div>
          <LoginForm handleLoginSubmit={this.handleLoginSubmit} loginErrorText={this.props.loginErrorText} />
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
