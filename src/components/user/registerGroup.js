import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';

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
      width: "500px",
      height: "500px",
      backgroundColor: "#050202",
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
              logOut={() =>this.props.logout()} />

            <RegisterGroupForm
              className="register-group__form"
              userId={this.props.user.users_id}
              token={this.props.userToken}
              registerGroup={this.props.registerGroup}
            />

            <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              contentLabel="Register Group Modal"
              style={customStyles}
            >
                Modal Content Goes Here.
            </Modal>
              
        </div>
    )
}
}

const mapStateToProps = (state) => {
    const { user, userToken, registerGroupMessage } = state.userReducer;
    return {
        user,
        userToken,
        registerGroupMessage
    }
}

export default connect(mapStateToProps, actions)(RegisterGroup);