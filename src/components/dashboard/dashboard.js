import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import * as actions from '../../actions';
import history from '../../history';

import DashboardHeader from './dashboardHeader';
import DashboardNavbar from './dashboardNavbar';
import bugHeader from './dashboardBugHeader';
import BugTag from '../bugs/bugTag';
import BugSorter from '../bugs/bugSorter';
import ModalContent from '../auth/modelContent';

const customStyles = {
  content : {
    top: "50%", 
    left: "50%",
    right: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "550px",
    backgroundColor: "#050202",
    borderRadius: "10px"
  }
};

Modal.setAppElement('.app-wrapper');

class DashBoard extends Component {
  constructor() {
  super();

  this.state = {
    modalIsOpen: false
  }

  this.openModal=this.openModal.bind(this);
  this.closeModal=this.closeModal.bind(this);
  this.createNavLinks=this.createNavLinks.bind(this);
}

  componentWillMount() {
    if (!this.props.LOGGED_IN) {
      history.push("/")
    } else {
      this.props.fetchUserBugs(this.props.user.users_id, this.props.userToken);
      this.props.fetchOrganizationBugs(this.props.user.users_organization_id, this.props.userToken);
      if (this.props.user.users_organization_id === null) {
        return;
      } else {
        this.props.getGroupName(this.props.user.users_organization_id, this.props.userToken);
    }
  }
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
    this.props.clearModalMessages();
    this.props.fetchOrganizationBugs(this.props.user.users_organization_id, this.props.userToken);
  }

  createNavLinks() {
    if (this.props.user.users_organization_id === null) {
      return (
        [
          {id: 1, title: `My Active Bug (${this.props.userBugs.length})`, onClick: () => this.props.fetchUserBugs(this.props.user.users_id, this.props.userToken), icon: "user"},
          {id: 3, title: "Report a Bug", onClick: () => history.push("/report-bug"), icon: "bug"},
          {id: 4, title: "Search Bugs", onClick: () => history.push("/search-bugs"), icon: "search"}
        ]
      )
    } else {
      return (
        [
          {id: 1, title: `My Active Bug (${this.props.userBugs.length})`, onClick: () => this.props.fetchUserBugs(this.props.user.users_id, this.props.userToken), icon: "user"},
          {id: 2, title: `All Bugs (${this.props.organizationBugs.length})`, onClick: () => history.push('/organization-dashboard'), icon: "users"},
          {id: 3, title: "Report a Bug", onClick: () => history.push("/report-bug"), icon: "bug"},
          {id: 4, title: "Search Bugs", onClick: () => history.push("/search-bugs"), icon: "search"}
        ]
      )
    }
  }


  render() {
    return(
      
        <div>
          <DashboardHeader
            pageTitle="Dashboard"
            className="dashboard__header"   
            linkOneName="My Profile"
            linkOne="/update-user"
            logOut={() =>this.props.logout()}
            user={this.props.user}
            token={this.props.userToken}
            usersGroup={this.props.usersGroup}
          />
          <DashboardNavbar
            links = {this.createNavLinks()}
            joinOrg = {this.props.user.users_organization_id === null ? true : false}
            openModal= {this.openModal}
            leaveGroup = {this.props.leaveGroup}
            token= {this.props.userToken}
            userId= {this.props.user.users_id}
          /> 
          <div className="dash-board__body-wrapper">
            <BugSorter 
            className="dashboard__bug-sorter"
            sortFunc={this.props.sortUserBugs}
            bugs={this.props.userBugs}
            token={this.props.userToken}
            Id={this.props.user.users_id}
            />
            {bugHeader()}
            {this.props.userBugs.length > 0 ?
              this.props.userBugs.map(bug => {
                return(
                <BugTag key={bug.bugs_id} bug={bug} /> 
                )
              })
             : <div className="dash-board__no-bugs">You currently have zero bugs assigned to you.</div>}
          </div>

          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            contentLabel="Example Modal"
            style={customStyles}
        >
            <ModalContent
              token={this.props.userToken}
              userId={this.props.user.users_id}
              onSubmit={this.props.joinGroup}
              successMessage={this.props.groupSuccessMessage}
              failureMessage={this.props.groupFailureMessage}
              closeModal={this.closeModal}
            />
        </Modal> 
      </div>
    )
}
}

const mapStateToProps = (state) => {
  const { user, userToken, groupSuccessMessage, groupFailureMessage, usersGroup, LOGGED_IN} = state.userReducer;
  const { userBugs, organizationBugs } = state.bugReducer;
  return {
    user,
    userToken,
    usersGroup,
    userBugs,
    organizationBugs,
    groupSuccessMessage,
    groupFailureMessage,
    LOGGED_IN
  }
}

export default connect(mapStateToProps, actions)(DashBoard);