import React, { Component } from 'react';

import history from '../../history';


class ReportBugSuccess extends Component {
  constructor(props) {
  super(props);

  this.returnToDashboard=this.returnToDashboard.bind(this);
}

  returnToDashboard() {
      this.props.onClick();
      history.push("/user-dashboard");
  }


  render() {
    return(
        <div className={`bug-form__response ${this.props.className}`}>
            <div className="bug-form__response-message">{this.props.message}</div>
            <div className="bug-form__response-links">
                <button  className="bug-form__response-link" onClick={() => this.returnToDashboard()}>Return To Dashboard</button>
                <button className="bug-form__response-link" onClick={() => this.props.onClick()}>Report Another Bug</button>
            </div>
        </div>
    )
}
}

export default ReportBugSuccess;