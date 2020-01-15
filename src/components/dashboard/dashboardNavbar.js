import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class DashboardNavbar extends Component {
  constructor(props) {
  super(props);
}
  render() {
    const {links, joinOrg} = this.props;
    return(
        <div className="dashboard__navbar">
           {links.map(link => {
               return(
               <a className="navbar-link" onClick={link.onClick} key={link.id}>
                   <FontAwesomeIcon icon={link.icon} className="navbar-link__icon"/>
                   <div className="navbar-link__title">{link.title}</div>
                </a>
               )
           })}
           {joinOrg === true ?
            <a className="navbar-link" onClick={() => console.log("join")} key={5}>
                <FontAwesomeIcon icon={"sign-in-alt"} className="navbar-link__icon"/>
                <div className="navbar-link__title">Join Group</div>
            </a> :
            <a className="navbar-link" onClick={() => console.log("leave")} key={5}>
                <FontAwesomeIcon icon={"sign-out-alt"} className="navbar-link__icon"/>
                <div className="navbar-link__title">Leave Group</div>
            </a>            
             }
        </div>
    )
}
}

export default DashboardNavbar;