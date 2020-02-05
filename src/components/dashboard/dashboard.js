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
    width: "800px",
    backgroundColor: "#050202",
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
}

  componentWillMount() {
    this.props.fetchUserBugs(this.props.user.users_id, this.props.userToken);
    this.props.fetchOrganizationBugs(this.props.user.users_organization_id, this.props.userToken);
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
          />
          <DashboardNavbar
            links = {[
              {id: 1, title: `My Active Bug (${this.props.userBugs.length})`, onClick: () => this.props.fetchUserBugs(this.props.user.users_id, this.props.userToken), icon: "user"},
              {id: 2, title: `All Bugs (${this.props.organizationBugs.length})`, onClick: () => history.push('/organization-dashboard'), icon: "users"},
              {id: 3, title: "Report a Bug", onClick: () => history.push("/report-bug"), icon: "bug"},
              {id: 4, title: "Search Bugs", onClick: () => history.push("/search-bugs"), icon: "search"}
            ]}
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
  const { user, userToken, groupSuccessMessage, groupFailureMessage  } = state.userReducer;
  const { userBugs, organizationBugs } = state.bugReducer;
  return {
    user,
    userToken,
    userBugs,
    organizationBugs,
    groupSuccessMessage,
    groupFailureMessage
  }
}

export default connect(mapStateToProps, actions)(DashBoard);