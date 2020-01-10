import React, { Component } from "react";

import formTitle from "../formTitle";

class LoginForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }

        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.handleLoginSubmit(this.state);
    }


    render() {
        const loginErrorText = this.props.loginErrorText;
    
        return (
            <div className="login-form">
                <div className="login-form__title-wrapper">
                    {formTitle("login-form__title", "LOGIN")}
                </div>
                {loginErrorText.length > 1 ? <div className="login-form__error-text">{loginErrorText}</div> : null}
                <form className="login-form__form" onSubmit={this.onSubmit}>
                    <input 
                      className="login-form__input"
                      type="email" name="email" 
                      placeholder="Email" 
                      onChange={this.onChange} 
                      value={this.state.email} 
                    />
                    <input 
                      className="login-form__input" 
                      type="password" 
                      name="password" 
                      placeholder="Password" 
                      onChange={this.onChange}
                      value={this.state.password} 
                    />
                    <button className="login-form__button" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}


export default LoginForm;