import React, { Component } from 'react';

import FormTitle from '../formTitle';


class UpdatePassword extends Component {
  constructor(props) {
  super(props);

  this.state = {
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
      passwordMismatch: ""
  }

  this.onChange=this.onChange.bind(this);
  this.onSubmit=this.onSubmit.bind(this);
}

  onChange(e) {
      this.setState({
          [e.target.name]: e.target.value,
          passwordMismatch: ""
      })
  }

  onSubmit(e) {
      e.preventDefault();
      if (this.state.newPassword === this.state.confirmNewPassword) {
        this.setState({
            passwordMismatch: ""
        });
        let passwordData = {
            "currentPassword": this.state.currentPassword,
            "newPassword": this.state.newPassword
    }
        this.props.updateUserPassword(passwordData, this.props.token, this.props.userId);
        this.props.openModal();
        this.setState({
            currentPassword: "",
            newPassword: "",
            confirmNewPassword: ""
        })
      } else {
            this.setState({
                passwordMismatch: "New passwords do not match. Please retry."
            })
            console.log(this.state.passwordMismatch);
      }

  }



 
  render() {
    return(
        <form className="update-password" onSubmit={this.onSubmit}>
            {FormTitle("update-password__title", "Update Password")}
            {this.state.passwordMismatch.length > 1 ? 
            <div className="update-password__mismatch">{this.state.passwordMismatch}</div> :
            null
            }
            <input  className="update-password__input" onChange={this.onChange} value={this.state.currentPassword} placeholder={"Current Password"} type="password" name="currentPassword"/>
            <input className="update-password__input" onChange={this.onChange} value={this.state.newPassword} placeholder={"New Password"} type="password" name="newPassword"/>
            <input className="update-password__input" onChange={this.onChange} value={this.state.confirmNewPassword} placeholder={"Confirm New Password"} type="password" name="confirmNewPassword"/>
            <button type="submit" className="update-password__button">Change Password</button>
        </form>
    )
}
}

export default UpdatePassword;