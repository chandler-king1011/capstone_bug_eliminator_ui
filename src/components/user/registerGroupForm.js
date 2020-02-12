import React, { Component } from 'react';

import FormTitle from '../formTitle';


class RegisterGroupForm extends Component {
  constructor(props) {
  super(props);

  this.state = {
      organization_name: "",
      organization_password: "",
      organization_password_confirm: "",
      passwordMismatch: ""
  }

  this.onChange=this.onChange.bind(this);
  this.onSubmit=this.onSubmit.bind(this);
}

  onChange(e) {
      this.setState({
          [e.target.name]: e.target.value
      })
  }

  onSubmit(e){
    e.preventDefault();
    if(this.state.organization_password === this.state.organization_password_confirm) {
      this.setState({
          passwordMismatch: ""
      })
      let groupData= {
        organization_name: this.state.organization_name,
        organization_password: this.state.organization_password,
        organization_creator_id: this.props.userId
      }
      this.props.registerGroup(groupData, this.props.token);
      this.props.openModal();
    } else {
        this.setState({
            passwordMismatch: "Passwords do not match."
        })
        console.log(this.state.passwordMismatch);
    }
  }

  render() {
    const { className } = this.props;
    return(
        <form className={`group-form ${className}`} onSubmit={this.onSubmit}>
            {FormTitle("group-form__title", "Create A Group")}
            <div className="group-form__disclaimer">*Creating a group will make you an admin of your group, and remove you from your current group.</div>
            <input 
              type="text"
              className="group-form__input"
              name="organization_name" 
              value={this.state.organization_name}
              onChange={this.onChange}
              placeholder="Group Name"
            />
            <input 
              type="password"
              className="group-form__input"
              name="organization_password"
              value={this.state.organziation_password}
              onChange={this.onChange}
              placeholder="Group Password"
            />
            <input 
              type="password"
              className="group-form__input"
              name="organization_password_confirm"
              value={this.state.organzation_password_confirm}
              onChange={this.onChange} 
              placeholder="Confirm Group Password"
            />
            <button className="group-form__button" type="submit">Register Group</button>
        </form>
    )
}
}

export default RegisterGroupForm;