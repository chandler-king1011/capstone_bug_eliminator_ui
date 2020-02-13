import React, { Component } from 'react';

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


  onChange(e) {
      this.setState({
          [e.target.name]: e.target.value
      })
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(e);
  }


  render() {
    return(
        <div className="reset-password-wrapper">
          <Header linkOne="/" linkOneName="Login" linkTwo="/register" linkTwoName="Sign Up" />
          <div className="reset-password-form__wrapper">
            <form onSubmit={this.onSubmit} className="reset-password-request">
                {formTitle("reset-password-request__title", "Enter your email to reset your password")}
                <input 
                  className="reset-password-request___input"
                  type="email"
                  name="email" 
                  value={this.state.email} 
                  onChange={this.onChange} 
                  placeholder="Enter Password" 
                />
                <button className="reset-password-request___button" type="submit">Reset Password</button>
            </form>
          </div>
          <Footer />
        </div>
    )
}
}

export default ResetPasswordRequest;