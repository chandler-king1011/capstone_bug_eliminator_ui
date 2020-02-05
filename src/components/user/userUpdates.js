import React, { Component } from 'react';
import {connect} from 'react-redux';

import * as actions from '../../actions';

import DashboardHeader from '../dashboard/dashboardHeader';


class UserProfile extends Component {
  constructor() {
  super();
}
  render() {
    return(
    <div className="user-profile">
        <DashboardHeader 
        className="user-profile__header"
        linkOne="/user-dashboard" 
        linkOneName="Dashboard"
        pageTitle={`Welcome ${this.props.user.users_first_name}!`}
        />
    </div>
    )
}
}

const mapStateToProps = (state) => {
    const {user} = state.userReducer;
    return {
        user
    }
}

export default connect(mapStateToProps, actions)(UserProfile);