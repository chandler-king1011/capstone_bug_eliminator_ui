import React, { Component } from 'react';

class Sidebar extends Component {
  constructor(props) {
  super(props);

  this.handleSideButtonClick=this.handleSideButtonClick.bind(this);
}



  handleSideButtonClick(e) {
    switch(e.target.innerHTML) {
        case "Assign To Me":
            let expandAssign = document.querySelector('.assign');
            if (expandAssign.classList.contains("sidebar-options__visible")) {
                expandAssign.classList.remove("sidebar-options__visible")
            } else {
                expandAssign.classList.add("sidebar-options__visible");
        }
        break; 

        case "Change Severity": 
            let expandSeverity = document.querySelector('.severity');
            if (expandSeverity.classList.contains("sidebar-options__visible")) {
                expandSeverity.classList.remove("sidebar-options__visible")
            } else {
                expandSeverity.classList.add("sidebar-options__visible");
        }
        break; 
        case "Change Status": 
            let expandStatus = document.querySelector('.status');
            if (expandStatus.classList.contains("sidebar-options__visible")) {
                expandStatus.classList.remove("sidebar-options__visible")
            } else {
                expandStatus.classList.add("sidebar-options__visible");
            }  
        break;   
        case "Resolve Bug": 
            let expandResolve = document.querySelector('.resolve');
            if (expandResolve.classList.contains("sidebar-options__visible")) {
                expandResolve.classList.remove("sidebar-options__visible")
            } else {
                expandResolve.classList.add("sidebar-options__visible");
            }  
        break; 

        case "NO":
            if (e.target.classList.contains("resolve-no")) {
                document.querySelector('.resolve').classList.remove("sidebar-options__visible");
            };
            if (e.target.classList.contains("assign-no")) {
                document.querySelector('.assign').classList.remove("sidebar-options__visible");
            };
            break;
        default: 
            return;

    }
  }

  render() {
    const {bug, updateBug, token, userId} = this.props;
    
    return(
        <div className="sidebar">
          <div className="sidebar__top">
            <h1 className="sidebar__header">Bug Details</h1>
            <ul className="sidebar__details">
                <li className="sidebar__assigned">
                    <div className="sidebar__label">Assigned To</div>
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
         
                <a onClick={this.handleSideButtonClick} className="sidebar-button assign-button">Assign To Me</a>
                    {bug.bugs_assigned_id !== userId ?
                    <div className="assign sidebar-options">
                        <div className="assign-confirmation">Are You Sure?</div>
                        <a className="sidebar-option" onClick={() => updateBug({"bugs_assigned_id": userId}, bug.bugs_id, token)}>YES</a>
                        <a onClick={this.handleSideButtonClick} className="sidebar-option assign-no">NO</a>
                    </div> : <div className="already-assigned assign sidebar-options">This bug is already assigned to you.</div>}

                <a onClick={this.handleSideButtonClick} className="sidebar-button severity-button" value="Severity">Change Severity</a>
                    <div className="severity sidebar-options">
                        <a className="sidebar-option" onClick={() => updateBug({"bugs_severity": "Minor"}, bug.bugs_id, token)}>Minor</a>
                        <a className="sidebar-option" onClick={() => updateBug({"bugs_severity": "Medium"}, bug.bugs_id, token)}>Medium</a>
                        <a className="sidebar-option" onClick={() => updateBug({"bugs_severity": "Major"}, bug.bugs_id, token)}>Major</a>
                    </div>
                <a onClick={this.handleSideButtonClick} className="sidebar-button status-button">Change Status</a>
                    <div className="status sidebar-options">
                        <a className="sidebar-option" onClick={() => updateBug({"bugs_status": "In Progress"}, bug.bugs_id, token)}>In Progress</a>
                        <a className="sidebar-option" onClick={() => updateBug({"bugs_status": "Testing"}, bug.bugs_id, token)}>Testing</a>
                        <a className="sidebar-option" onClick={() => updateBug({"bugs_status": "In Waiting"}, bug.bugs_id, token)}>In Waiting</a>
                    </div>
                <a onClick={this.handleSideButtonClick} className="sidebar-button resolve-button">Resolve Bug</a>
                    <div className="resolve sidebar-options">
                        <div className="resolve-confirmation">Are You Sure?</div>
                        <a className="sidebar-option" onClick={() => updateBug({"bugs_status": "Resolved"}, bug.bugs_id, token)}>YES</a>
                        <a onClick={this.handleSideButtonClick} className="sidebar-option resolve-no">NO</a>
                    </div>
            </div>
        </div>
    )
}
}

export default Sidebar;