import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import Header from '../header';
import Footer from '../footer';
import formTitle from '../formTitle';


class ResetPassword extends Component {
  constructor() {
  super();

  this.state = {
      validToken: true,
      invalidTokenMessage: "",
      mismatchPasswords: false,
      newPassword: "",
      confirmNewPassword: ""
  }

  this.onChange = this.onChange.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
}


  componentWillMount() {
    axios({
        method: "post",
        url: "https://api-capstone-bug-tracker.herokuapp.com/users/reset-password/token-verification", 
        headers: {"Access-Control-Allow-Origin": "*"},
        data: {"token": this.props.match.params.token}
    })
    .then(response => {
        if (response.data.status === 200) {
            this.setState({
                validToken: true
            })
        } else if (response.data.status === 400) {
            this.setState({
                validToken: false,
                invalidTokenMessage: response.data.message
            })
        }
    }).catch(error => {
        console.log(error);
    })
  }

  onChange(e) {
      this.setState({
          [e.target.name]: e.target.value
      })
  }

  onSubmit(e) {
      e.preventDefault();
      if (this.state.newPassword === this.state.confirmNewPassword) {
          this.setState({
            mismatchPasswords: false
          })
          this.props.resetPassword(this.state.newPassword, this.props.match.params.token)
      } else {
          this.setState({
            mismatchPasswords: true
          })
      }
  }


  render() {
    return(
        <div className="reset-password">
            <Header />
            {!this.state.validToken ? 
            <div className="reset-password__invalid-token">{this.state.invalidTokenMessage}</div> :
            null}
            <form className="reset-password__form" onSubmit={this.onSubmit}>
                {formTitle("reset-password__form-title", "Reset Password")}
                <input 
                    type="password" 
                    value={this.state.newPassword} 
                    onChange={this.onChange} 
                    name="newPassword" 
                    placeholder="New Password" 
                    className="reset-password__form-input"
                />
                <input 
                    type="password" 
                    value={this.state.confirmNewPassword} 
                    onChange={this.onChange} 
                    name="confirmNewPassword" 
                    placeholder="Confirm New Password" 
                    className="reset-password__form-input"
                />
                <button type="submit" className="reset-password__form-button">Reset Password</button>
            </form>
            <Footer />
        </div>
    )
}
}

export default connect(null, actions)(ResetPassword);