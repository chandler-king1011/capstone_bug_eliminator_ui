import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import history from '../history'

class Header extends Component {
    constructor(props) {
        super(props);
    }

  render() {
    const { linkOne, linkOneName, linkTwo, linkTwoName } = this.props;

    return(
        <div className="header">
            <FontAwesomeIcon icon={"bug"} className="header__icon"/>
            <h1 className="header_title">Bug Eliminator</h1>
            <div className="header_links">
                <a className="header_link" onClick={() => history.push(`${linkOne}`)}>{linkOneName}</a>
                <a className="header_link" onClick={() => history.push(`${linkTwo}`)}>{linkTwoName}</a>
            </div>
        </div>
    )
}
}

export default Header;