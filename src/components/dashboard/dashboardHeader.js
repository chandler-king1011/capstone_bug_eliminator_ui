import React, { Component } from 'react';

import history from '../../history';

class DashboardHeader extends Component {
    constructor(props) {
        super(props);
    }

  render() {
    const { className, linkOne, linkOneName, logOut, pageTitle, user, usersGroup} = this.props;

    return(
        <div className={`header ${className}`}>
            <div className="header__user-info">
                <a className="header__user-name header__link" onClick={() => history.push("/user-dashboard")}>{`${user.users_first_name} ${user.users_last_name}`}</a>
                {this.props.user.users_organization_id != null ? 
                <a className="header__group-name header__link" onClick={() => history.push("/organization-dashboard")}>{`${usersGroup}`}</a> :
                null}
            </div>
            <div className="header__middle-wrapper">
                <h1 className="header__title">Bug Eliminator</h1>
                <h3 className="header__page-title">{pageTitle}</h3>
            </div>
            <div className="header_links">
                <a className="header_link" onClick={() => history.push(`${linkOne}`)}>{linkOneName}</a>
                <a className="header_link" onClick={logOut}>Log Out</a>
            </div>
        </div>
    )
}
}

export default DashboardHeader;