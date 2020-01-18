import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import DashboardHeader from '../dashboard/dashboardHeader';
import BugDetailHeader from './bugDetailHeader';
import Sidebar from './detailSidebar';



class BugDetail extends Component {
  constructor(props) {
  super(props);
  }

  componentWillMount() {
      this.props.fetchCurrentBug(this.props.match.params.slug, this.props.userToken);
  }

  componentWillUnmount() {
      this.props.removeCurrentBug();
  }

  render() {
    return(
        <div className="bug-detail">
            <DashboardHeader
                pageTitle="Bug Detail"
                className="bug-detail__header"   
                linkOne="/user-dashboard"
                linkOneName="Back To Dashboard"
                logOut={() =>this.props.logout()}
            />
            <BugDetailHeader className="bug-detail__bug-header" bugTitle={this.props.currentBug.bugs_title}/>
            <div className="bug-detail__body-wrapper">
                <Sidebar 
                    bug={this.props.currentBug}
                    token={this.props.userToken}
                    updateBug={this.props.updateBug}
                    userId ={this.props.user.users_id}
                />
                <div className="bug-detail__description-comments">
                    <div className="bug-detail__description">{this.props.currentBug.bugs_description}</div>
                    <div>comments</div>
                </div>
                <div className="bug-detail__pictures">
                    Pictures
                </div>


            </div>
        </div>
    )
}
}

const mapStateToProps = (state) => {
    const { userToken, user } = state.userReducer;
    const { currentBug } = state.bugReducer;
    return {
        userToken,
        currentBug,
        user
    }
}

export default connect (mapStateToProps, actions)(BugDetail);