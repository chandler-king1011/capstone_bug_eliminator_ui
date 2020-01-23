import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import DashboardHeader from '../dashboard/dashboardHeader';
import ReportBugForm from '../bugs/reportBugForm';



class ReportBug extends Component {
  constructor() {
  super();
}
  render() {
    return(
        <div className="report-bug">
            <DashboardHeader
              pageTitle="Report A Bug"
              className="report-bug__header"   
              linkOne="/user-dashboard"
              linkOneName="Back To Dashboard"
              logOut={() =>this.props.logout()}
            />

            <ReportBugForm
              className="report-bug__form"
              user={this.props.user}
              token={this.props.userToken}
              reportBug={this.props.reportBug}
            />


        </div>
    )
}
}

const mapStateToProps = (state) => {
    const {user, userToken} = state.userReducer;
    return {
      user,
      userToken
    }
}


export default connect(mapStateToProps, actions)(ReportBug);