import React, { Component } from 'react';

import FormTitle from '../formTitle';


class UserUpdateForm extends Component {
  constructor(props) {
  super(props);

  this.state = {
      users_first_name: "",
      users_last_name: "",
      users_email: "",
      users_role: "",
      users_organization_id: this.props.user.users_organization_id
  }

  this.onChange=this.onChange.bind(this);
  this.onSubmit=this.onSubmit.bind(this);
  this.forgetChanges=this.forgetChanges.bind(this);
}


  componentWillMount() {
    this.setState({
        users_first_name: this.props.user.users_first_name,
        users_last_name: this.props.user.users_last_name,
        users_email: this.props.user.users_email,
        users_role: this.props.user.users_role
    })
  }

  onChange(e) {
      this.setState({
          [e.target.name]: e.target.value
      })
  }

  forgetChanges() {
      this.setState({
        users_first_name: this.props.user.users_first_name,
        users_last_name: this.props.user.users_last_name,
        users_email: this.props.user.users_email,
        users_role: this.props.user.users_role
      })
  }

  onSubmit(e) {
      e.preventDefault();
      this.props.updateUser(this.state, this.props.userToken, this.props.user.users_id);
      this.props.openModal();
  }


  render() {
    return(
    <form className="update-form" onSubmit={this.onSubmit}>
        {FormTitle("update-form__title", "Update User Information")}
        <input  className="update-form__input" onChange={this.onChange} value={this.state.users_first_name} placeholder={"First Name"} type="text" name="users_first_name"/>
        <input className="update-form__input" onChange={this.onChange} value={this.state.users_last_name} placeholder={"Last Name"} type="text" name="users_last_name"/>
        <input className="update-form__input" onChange={this.onChange} value={this.state.users_email} placeholder={"Email"} type="email" name="users_email"/>
        {this.state.users_role=== "Admin" ?
        <select className="update-form__input select disabled" disabled>
            <option className="update-form__option" value="Admin">Admin</option>
        </select>
        :
        <select 
                className="update-form__input select"
                type="role" 
                name="users_role" 
                placeholder="Role"
                value={this.state.users_role}
                onChange={this.onChange}
            >
                <option className="update-form__option" value="Tester">Tester</option>
                <option className="update-form__option" value="Developer">Developer</option>
            </select> } 
            <button className="update-form__button" type="submit">Save Changes</button>
            <button onClick={this.forgetChanges} className="update-form__button" type="reset">Forget Changes</button>
    </form>
    )
}
}

export default UserUpdateForm;