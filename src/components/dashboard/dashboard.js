import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import history from '../../history';

import DashboardHeader from './dashboardHeader';
import DashboardNavbar from './dashboardNavbar';
import bugHeader from './dashboardBugHeader';
import BugTag from '../bugs/bugTag';

class DashBoard extends Component {
  constructor() {
  super();
}

  componentWillMount() {
    this.props.fetchUserBugs(this.props.user.users_id, this.props.userToken);
    this.props.fetchOrganizationBugs(this.props.user.users_organization_id, this.props.userToken);
  }


  render() {
    return(
        <div>
          <DashboardHeader
            pageTitle="Dashboard"
            className="dashboard__header"   
            linkOneName="Bug Tips?"
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
          /> 
          <div className="dash-board__body-wrapper">
            {bugHeader()}
            {this.props.userBugs.length > 0 ?
              this.props.userBugs.map(bug => {
                return(
                <BugTag key={bug.bugs_id} bug={bug} /> 
                )
              })
             : <div className="dash-board__no-bugs">You currently have zero bugs assigned to you.</div>}
          </div>

        </div>
    )
}
}

const mapStateToProps = (state) => {
  const { user, userToken } = state.userReducer;
  const { userBugs, organizationBugs } = state.bugReducer;
  return {
    user,
    userToken,
    userBugs,
    organizationBugs
  }
}

export default connect(mapStateToProps, actions)(DashBoard);