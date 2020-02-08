import React, { Component } from 'react';
import {connect} from 'react-redux';
import Modal from 'react-modal';

import * as actions from '../../actions';

import DashboardHeader from '../dashboard/dashboardHeader';
import UserUpdateForm from './userUpdateForm';
import UpdatePassword from './updatePassword';

const customStyles = {
  content : {
    top: "50%", 
    left: "50%",
    right: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "800px",
    backgroundColor: "#050202",
  }
};

Modal.setAppElement('.app-wrapper');


class UserProfile extends Component {
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
    this.props.clearUpdateUserModal();
    this.setState({
      modalIsOpen: false
    })
    
  }


  render() {
    return(
    <div className="user-profile">
        <DashboardHeader 
        className="user-profile__header"
        linkOne="/user-dashboard" 
        linkOneName="Dashboard"
        pageTitle={`Welcome ${this.props.user.users_first_name}!`}
        />

        <div className="user-profile__body">
          <UserUpdateForm 
          user={this.props.user}
          updateUser={this.props.updateUser}
          token={this.props.userToken}
          openModal={this.openModal}
          />

          <UpdatePassword 
          updateUserPassword={this.props.updateUserPassword}
          token={this.props.userToken}
          userId={this.props.user.users_id}
          openModal={this.openModal}
          />

          

          <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              contentLabel="Example Modal"
              style={customStyles}
          >
            {this.props.updateUserSuccessMessage.length > 1 ? <div className="user-profile__modal-success">{this.props.updateUserSuccessMessage}</div> : <div className="user-profile__modal-failure">{this.props.updateUserFailureMessage}</div>  }
          </Modal>
        </div>
    </div>
    )
}
}

const mapStateToProps = (state) => {
    const {user, userToken, updateUserSuccessMessage, updateUserFailureMessage} = state.userReducer;
    return {
        user,
        userToken,
        updateUserSuccessMessage,
        updateUserFailureMessage
    }
}

export default connect(mapStateToProps, actions)(UserProfile);