import React, { Component } from 'react';

import history from '../history'

class Header extends Component {

  render() {
    return(
        <div className="header">
            <img className="header__img" src='http://via.placeholder.com/80x80' />
            <h1 className="header_title">Bug Eliminator</h1>
            <div className="header_links">
                <a className="header_link">Learn More</a>
                <a className="header_link" onClick={() => history.push('/register')}>Not Registered? Sign Up!</a>
            </div>
        </div>
    )
}
}

export default Header;