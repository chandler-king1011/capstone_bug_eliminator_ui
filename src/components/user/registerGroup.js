import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as actions from '../../actions';

import DashboardHeader from '../dashboard/dashboardHeader';
import RegisterGroupForm from './registerGroupForm';

const customStyles = {
    content : {
      top: "50%", 
      left: "50%",
      right: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "460px",
      height: "50px",
      backgroundColor: "#050202",
      borderRadius: "10px"
    }
  };
  
  Modal.setAppElement('.app-wrapper');


class RegisterGroup extends Component {
  constructor() {
  super();

  this.state = {
    modalIsOpen: false
  }

  this.openModal=this.openModal.bind(this);
  this.closeModal=this.closeModal.bind(this);


}

  openModal() {
    this.setState({
      modalIsOpen: true
    })
  }

  closeModal() {
    this.setState({
      modalIsOpen: false
    })
    this.props.clearRegisterGroupModal();
    
  }

  componentWillMount() {
      this.props.clearRegisterGroupModal();
  }

  render() {
    return(
        <div className="register-group">
            <DashboardHeader 
              className="register-group__header"
              linkOne="/user-dashboard" 
              linkOneName="Dashboard"
              logOut={() =>this.props.logout()} 
              user={this.props.user}
              token={this.props.userToken}
              usersGroup={this.props.usersGroup}
            />
            <div className="register-group__body">
              <RegisterGroupForm
                className="register-group__form"
                userId={this.props.user.users_id}
                token={this.props.userToken}
                registerGroup={this.props.registerGroup}
                openModal={this.openModal}
              />
              <Modal
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal}
                contentLabel="Register Group Modal"
                style={customStyles}
              >
              {this.props.registerGroupSuccess.length > 1 ? <div className="group-form__modal-success">{this.props.registerGroupSuccess}</div> :
                this.props.registerGroupFailed.length > 1 ? <div className="group-form__modal-failure">{this.props.registerGroupFailed}</div> : 
                <FontAwesomeIcon className="user-profile-modal__spinner" icon="spinner" spin />
              }
              </Modal>
            </div>
              
        </div>
    )
}
}

const mapStateToProps = (state) => {
    const { user, userToken, registerGroupSuccess, registerGroupFailed, usersGroup } = state.userReducer;
    return {
        user,
        usersGroup,
        userToken,
        registerGroupSuccess,
        registerGroupFailed
    }
}

export default connect(mapStateToProps, actions)(RegisterGroup);