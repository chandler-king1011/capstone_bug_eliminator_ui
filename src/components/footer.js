import React, { Component } from 'react';
import moment from "moment";

import history from '../history'

class Footer extends Component {

  render() {
    return(
        <div className="footer">
            <a className="footer__title" onClick={() => history.push("/")}>Bug Eliminator</a>
            <div className="footer__copyright">{"Copyright" + " " + moment().format('YYYY') + " " + "Chandler King" + " "  + "All rights reserved"}</div>
        </div>
    )
}
}

export default Footer;