import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import history from '../../history';

class DashboardHeader extends Component {
    constructor(props) {
        super(props);
    }

  render() {
    const { className, linkOne, linkOneName, linkTwo, linkTwoName } = this.props;

    return(
        <div className={`header ${className}`}>
            <FontAwesomeIcon icon={"bug"} className="header__icon"/>
            <div className="header__middle-wrapper">
                <h1 className="header__title">Bug Eliminator</h1>
                <h3 className="header__page-title">Dashboard</h3>
            </div>
            <div className="header_links">
                <a className="header_link" onClick={() => history.push(`${linkOne}`)}>{linkOneName}</a>
                <a className="header_link" onClick={() => history.push(`${linkTwo}`)}>{linkTwoName}</a>
            </div>
        </div>
    )
}
}

export default DashboardHeader;