import React, { Component } from 'react';
import {connect} from 'react-redux';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as actions from '../../actions';
import history from '../../history';

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
    width: "460px",
    height: "50px",
    backgroundColor: "#050202",
    borderRadius: "10px"
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

  componentWillMount() {
    if(!this.props.LOGGED_IN) {
      history.push("/");
    }
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
        logOut={() =>this.props.logout()}
        user={this.props.user}
        token={this.props.userToken}
        usersGroup={this.props.usersGroup}
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
            {this.props.updateUserSuccessMessage.length > 1 ? <div className="user-profile__modal-success">{this.props.updateUserSuccessMessage}</div> :
            this.props.updateUserFailureMessage.length > 1 ? <div className="user-profile__modal-failure">{this.props.updateUserFailureMessage}</div> : 
            <FontAwesomeIcon className="user-profile-modal__spinner" icon="spinner" spin />
            }
          </Modal>
        </div>
    </div>
    )
}
}

const mapStateToProps = (state) => {
    const {user, userToken, updateUserSuccessMessage, updateUserFailureMessage, usersGroup, LOGGED_IN} = state.userReducer;
    return {
        user,
        userToken,
        usersGroup,
        updateUserSuccessMessage,
        updateUserFailureMessage,
        LOGGED_IN
    }
}

export default connect(mapStateToProps, actions)(UserProfile);