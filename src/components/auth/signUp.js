import React, { Component } from 'react';
import { connect } from "react-redux";

import * as actions from "../../actions";
import history from '../../history';

import Header from '../header';
import Footer from '../footer';
import SignUpForm from './signUpForm';
import signUpCriteria from './signUpCriteria';
import Success from '../successMessage';


class SignUp extends Component {

  constructor() {
    super()

    this.handleFormSubmit=this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(userObject) {
    this.props.register(userObject);
  }

  componentWillMount() {
    this.props.clearRegisterMessages();
    if (this.props.userToken != "") {
      history.push('/user-dashboard');
    }
  } 


  render() {
    return(
        <div className="signup">
          <Header linkOneName="Learn More" linkTwo="/" linkTwoName="Login" />
          <div className="signup__body-wrapper">
            {
            this.props.userSuccessMessage.length < 1 ? 
            <SignUpForm handleFormSubmit={this.handleFormSubmit} userFailureMessage={this.props.userFailureMessage} /> :
            Success("signup__success-message", this.props.userSuccessMessage, "Login", "/")
            }
            {signUpCriteria("signup__criteria")}
          </div>
          <Footer />
        </div>
    )
}
}


const mapStateToProps = (state) => {
  return {
    userSuccessMessage: state.userReducer.userSuccessMessage,
    userFailureMessage: state.userReducer.userFailureMessage,
    userToken: state.userReducer.userToken
  }
}

export default connect(mapStateToProps, actions)(SignUp);