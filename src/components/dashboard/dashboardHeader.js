import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import history from '../../history';

class DashboardHeader extends Component {
    constructor(props) {
        super(props);
    }

  render() {
    const { className, linkOne, linkOneName, logOut, pageTitle } = this.props;

    return(
        <div className={`header ${className}`}>
            <a onClick={() => history.push("/user-dashboard")}>
                <FontAwesomeIcon icon={"bug"} className="header__icon"/>
            </a>
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