import React, { Component } from 'react';

class Sidebar extends Component {
  constructor(props) {
  super(props);
}
  render() {
    const {bug} = this.props;
    
    return(
        <div className="sidebar">
            <ul className="sidebar__details">
                <li className="sidebar__assigned">
                    <div className="sidebar__label">Assigned To:</div>
                    <div className="sidebar__value">{bug.bugs_assigned_id}</div>
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

            <div className="sidebar__buttons">
                buttons
            </div>
        </div>
    )
}
}

export default Sidebar;