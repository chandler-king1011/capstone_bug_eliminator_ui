import React, { Component } from 'react';

import formTitle from '../formTitle';


class SignUpForm extends Component {
  constructor() {
  super();

  this.state = {
      users_first_name: "",
      users_last_name: "",
      users_email: "",
      users_password: "",
      users_role: "Tester"
  }

  this.onChange = this.onChange.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
}


  onChange(e) {
    this.setState({
        [e.target.name]: e.target.value
    });

  }

  onSubmit(e) {
      e.preventDefault();
      this.props.handleFormSubmit(this.state);
  }


  render() {
    return(
    <div className="signup-form">
        <div className="signup-form__title-wrapper">
            {formTitle("signup-form__title", "REGISTER")}
        </div>
        <form className="signup-form__form" onSubmit={this.onSubmit}>
            {
            this.props.userFailureMessage.length > 1 ? 
            <div className="signup-form__error-text">{this.props.userFailureMessage}</div> 
            : null
            }
            <input 
                className="signup-form__input"
                type="name" name="users_first_name" 
                placeholder="First Name" 
                onChange={this.onChange} 
                value={this.state.users_first_name} 
            />
            <input 
                className="signup-form__input" 
                type="name" 
                name="users_last_name" 
                placeholder="Last Name" 
                onChange={this.onChange}
                value={this.state.users_last_name} 
            />
            <input 
                className="signup-form__input" 
                type="email" 
                name="users_email" 
                placeholder="Email" 
                onChange={this.onChange}
                value={this.state.users_email} 
            />
            <input 
                className="signup-form__input" 
                type="password" 
                name="users_password" 
                placeholder="Password" 
                onChange={this.onChange}
                value={this.state.users_password} 
            />
            <select
                className="signup-form__input" 
                type="role" 
                name="users_role" 
                placeholder="Role"
                onChange={this.onChange}
                value={this.state.users_role}
            >
                <option value="Tester">Tester</option>
                <option value="Developer">Developer</option>
            </select>     

            <button className="signup-form__button" type="submit">Submit</button>
        </form>
    </div>
    )
}
}

export default SignUpForm;