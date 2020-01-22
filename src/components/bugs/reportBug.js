import React, { Component } from 'react';

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

            <ReportBugForm />


        </div>
    )
}
}

export default ReportBug;