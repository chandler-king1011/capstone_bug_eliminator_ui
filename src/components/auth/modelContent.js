import React, { Component } from 'react';


import history from '../../history';
import FormTitle from '../formTitle';


class ModalContent extends Component {
  constructor(props) {
  super(props);

  this.state = {
    organizationName: "",
    password: "",
    userId: this.props.userId
  }

}

  onChange = (e)  => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e)  => {
    e.preventDefault();
    this.props.onSubmit(this.state, this.props.token);
  }


  render() {
    return(

      <div className="join-group">
        {FormTitle("join-group__title","Join Group")}
        {this.props.failureMessage ? 
        <div className="join-group__failure-message">{this.props.failureMessage}</div> : 
          null
        }

        {this.props.successMessage ? 
        <div className="join-group__success">
          <div className="join-group__success-message">{this.props.successMessage}</div>
          <button onClick={() => this.props.closeModal()} className="join-group__success-button">Close</button>
        </div> :

        
        <form className="join-group-form" onSubmit={this.onSubmit}>
          
            <input 
              className="join-group-form__input name"
              type="text" 
              value={this.state.organzationName} 
              placeholder="Group Name" 
              name="organizationName"
              onChange={this.onChange}
            />
            <input 
              className="join-group-form__input password"
              type="password" 
              value={this.state.password} 
              placeholder="Password" 
              name="password"
              onChange={this.onChange}
            />

          <button type="submit" className="join-group-form__button">Submit</button>
          <div className="join-group-form__register-wrapper">
            <a className="join-group-form__register-group" onClick={() => history.push('/register-group')}>Want to register your own group? Click here!</a>
          </div>
        </form>
        }
      </div>
    )
}
}

export default ModalContent;

