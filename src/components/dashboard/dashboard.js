import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import history from '../../history';

import DashboardHeader from './dashboardHeader';
import DashboardNavbar from './dashboardNavbar';

class DashBoard extends Component {
  constructor() {
  super();
}
  render() {
    return(
        <div>
          <DashboardHeader
            className="dashboard__header"   
            linkOneName="Bug Tips?"
            linkTwoName="Log Out"
          />
          <DashboardNavbar
            links = {[
              {id: 1, title: "My Active Bugs", onClick: () => console.log("My Active bugs"), icon: "user"},
              {id: 2, title: "All Bugs", onClick: () => console.log("All Bugs"), icon: "users"},
              {id: 3, title: "Report a Bug", onClick: () => history.push("/report-bug"), icon: "bug"},
              {id: 4, title: "Search Bugs", onClick: () => history.push("/search-bugs"), icon: "search"}
            ]}
            joinOrg = {this.props.user.users_organization_id === null ? true : false}
          />          
        </div>
    )
}
}

const mapStateToProps = (state) => {
  const { user } = state.userReducer;
  return {
    user
  }

}

export default connect(mapStateToProps, actions)(DashBoard);