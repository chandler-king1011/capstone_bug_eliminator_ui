import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from '../../actions';
import formTitle from "../formTitle";

class LoginForm extends Component {

    onSubmit(e) {
        e.preventDefault();
        let user = {
            email: e.target[0].value,
            password: e.target[1].value
        };
        actions.login(user);
    }

    render() {
        return (
            <div className="login-form">
                <div className="login-form__title-wrapper">
                    {formTitle("login-form__title", "LOGIN")}
                </div>
                <form className="login-form__form" onSubmit={this.onSubmit}>
                    <input 
                      className="login-form__input"
                      type="email" name="email" 
                      placeholder="Email" 
                      value={this.value} 
                      onChange={this.handleChange} 
                    />
                    <input 
                      className="login-form__input" 
                      type="password" 
                      name="password" 
                      placeholder="Password" 
                      value={this.value} 
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}


LoginForm = connect(null, actions)(LoginForm);
export default LoginForm;