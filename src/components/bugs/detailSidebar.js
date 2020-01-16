import React, { Component } from 'react';

class Sidebar extends Component {
  constructor(props) {
  super(props);
}
  render() {
    const {bug, currentUserRole} = this.props;
    
    return(
        <div className="sidebar">
          <div className="sidebar__top">
            <h1 className="sidebar__header">Bug Details</h1>
            <ul className="sidebar__details">
                <li className="sidebar__assigned">
                    <div className="sidebar__label">Assigned To:</div>
                    <div className="sidebar__value">{`${bug.users_first_name} ${bug.users_last_name}`}</div>
                </li>
                <li className="sidebar__created">
                    <div className="sidebar__label">Date Created</div>
                    <div className="sidebar__value">{bug.bugs_created_date ? bug.bugs_created_date.slice(0, 10): bug.bugs_created_date }</div>
                </li>
                <li className="sidebar__severity">
                    <div className="sidebar__label">Severity</div>
                    <div className="sidebar__value">{bug.bugs_severity}</div>
                </li>
                <li className="sidebar__status">
                    <div className="sidebar__label">Status</div>
                    <div className="sidebar__value">{bug.bugs_status}</div>
                </li>
                <li className="sidebar__replicable">
                    <div className="sidebar__label">Replicable</div>
                    <div className="sidebar__value">{bug.bugs_replicable}</div>
                </li>
            </ul>
          </div>

            <div className="sidebar__buttons">
                {currentUserRole == "Admin" ?
                <button onClick={() => console.log("Reassign")} className="sidebar__button-reassign">Reassign</button> :
                null}
                <button onClick={() => console.log("severity")} className="sidebar__button-severity">Change Severity</button>
                <button onClick={() => console.log("status")} className="sidebar__button-status">Change Status</button>
                <button onClick={() => console.log("resolve")} className="sidebar__button-status">Resolve Bug</button>
            </div>
        </div>
    )
}
}

export default Sidebar;