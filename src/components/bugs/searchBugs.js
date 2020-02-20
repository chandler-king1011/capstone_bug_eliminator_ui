import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import history from '../../history';

import DashboardHeader from '../dashboard/dashboardHeader';
import DashboardBugHeader from '../dashboard/dashboardBugHeader';
import SearchBugBar from './searchBugBar';
import BugTag from './bugTag';

class SearchBugs extends Component {
  constructor() {
  super();

}

 componentWillMount() {
  if(!this.props.LOGGED_IN) {
    history.push("/");
  }
 }


 componentWillUnmount() {
   this.props.clearSearchBugs();
 }

  render() {
    return(
        <div className="search-bugs">
            <DashboardHeader
              pageTitle="Search All Bugs"
              className="search-bug__header"   
              linkOne="/user-dashboard"
              linkOneName="Dashboard"
              logOut={() =>this.props.logout()}
              user={this.props.user}
              token={this.props.userToken}
              usersGroup={this.props.usersGroup}
            />
            <SearchBugBar
              className="search-bugs__searchbar"
              searchAllBugs={this.props.searchAllBugs}
              orgId={this.props.user.users_organization_id}
              token={this.props.userToken}
             />

             {this.props.noBugsMessage.length > 0 ? 
             <div className="search-bugs__no-matching">{this.props.noBugsMessage}</div> :
              null}

             {this.props.bugSearchBugs.length > 0 ?
             <div className="search-bugs__bugs">
                  <DashboardBugHeader 
                    className="search-bugs__bug-header"
                  /> 
                  {this.props.bugSearchBugs.map(bug => {
                    return(
                    <BugTag key={bug.bugs_id} bug={bug} /> 
                    )
                  }) }
            </div>
            :
            null }
        </div>
    )
}
}

const mapStateToProps = (state) => {
  const { user, userToken, usersGroup, LOGGED_IN } = state.userReducer;
  const { bugSearchBugs, noBugsMessage } = state.bugReducer;
  return {
    user,
    userToken,
    bugSearchBugs,
    noBugsMessage,
    usersGroup,
    LOGGED_IN
  }
}

export default connect(mapStateToProps, actions)(SearchBugs);