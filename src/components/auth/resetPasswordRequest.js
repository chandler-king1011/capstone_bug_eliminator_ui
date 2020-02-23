import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import history from '../../history';

import Header from '../header';
import Footer from '../footer';
import formTitle from '../formTitle';


class ResetPasswordRequest extends Component {
  constructor() {
  super();

  this.state = {
      email: ""
  }

  this.onChange=this.onChange.bind(this);
  this.onSubmit=this.onSubmit.bind(this);
}


  componentWillMount() {
    this.props.clearResetPasswordRequest();
  }


  onChange(e) {
      this.setState({
          [e.target.name]: e.target.value
      });
      this.props.clearResetPasswordRequest();
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.passwordResetRequest(this.state.email);
  }


  render() {
    return(
        <div className="reset-password-wrapper">
          <Header linkOne="/" linkOneName="Login" linkTwo="/register" linkTwoName="Sign Up" />
          <div className="reset-password-form__wrapper">
            {this.props.passwordResetEmailSent.length > 1 ?
            <div className="reset-email__success">
              <div className="reset-email__message">{this.props.passwordResetEmailSent}</div>
              <button className="reset-email__login" onClick={() => history.push("/")}>Login</button>
            </div> :
            <form onSubmit={this.onSubmit} className="reset-password-request">
                {formTitle("reset-password-request__title", "Enter your email to reset your password")}
                {this.props.passwordResetEmailFailed.length > 1 ? 
                <div className="reset-email__failed">{this.props.passwordResetEmailFailed}</div>
                : null}
                <input 
                  className="reset-password-request___input"
                  type="email"
                  name="email" 
                  value={this.state.email} 
                  onChange={this.onChange} 
                  placeholder="Enter Email" 
                />
                <button className="reset-password-request___button" type="submit">Reset Password</button>
            </form> }
          </div>
          <Footer />
        </div>
    )
}
}

const mapStateToProps = (state) => {
  const { passwordResetEmailSent, passwordResetEmailFailed } = state.userReducer;
  return {
    passwordResetEmailSent,
    passwordResetEmailFailed
  }
}

export default connect(mapStateToProps, actions)(ResetPasswordRequest);