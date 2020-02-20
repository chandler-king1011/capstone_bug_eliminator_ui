import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import history from '../../history';

import DashboardHeader from '../dashboard/dashboardHeader';
import ReportBugForm from './reportBugForm';
import ReportBugSuccess from './reportBugSuccess'



class ReportBug extends Component {
  constructor() {
  super();
}


  componentWillMount() {
    if (!this.props.LOGGED_IN) {
      history.push("/");
    }
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
              user={this.props.user}
              token={this.props.userToken}
              usersGroup= {this.props.usersGroup}
            />
            {this.props.reportBugMessage.length > 0 ? 
              <ReportBugSuccess 
                className="report-bug__success"
                message={this.props.reportBugMessage}
                onClick={this.props.clearReportSuccessMessage}
              /> :
              <ReportBugForm
                className="report-bug__form"
                user={this.props.user}
                token={this.props.userToken}
                reportBug={this.props.reportBug}
                error={this.props.reportBugError}
              /> 
            }



        </div>
    )
}
}

const mapStateToProps = (state) => {
    const {user, userToken, usersGroup, LOGGED_IN } = state.userReducer;
    const { reportBugMessage, reportBugError } = state.bugReducer;
    return {
      user,
      userToken,
      reportBugMessage,
      reportBugError,
      usersGroup,
      LOGGED_IN
    }
}


export default connect(mapStateToProps, actions)(ReportBug);