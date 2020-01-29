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
              pageTitle="Report a Bug"
              className="report-bug__header"   
              linkOne="/user-dashboard"
              linkOneName="Dashboard"
              logOut={() =>this.props.logout()}
            />
              <ReportBugForm
                className="report-bug__form"
                user={this.props.user}
                token={this.props.userToken}
                reportBug={this.props.reportBug}
                message={this.props.reportBugMessage}
                error={this.props.reportBugError}
              />
        </div>
    )
}
}

const mapStateToProps = (state) => {
    const {user, userToken} = state.userReducer;
    const { reportBugMessage, reportBugError } = state.bugReducer;
    return {
      user,
      userToken,
      reportBugMessage,
      reportBugError
    }
}


export default connect(mapStateToProps, actions)(ReportBug);