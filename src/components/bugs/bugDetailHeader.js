import React, { Component } from 'react';


class BugDetailHeader extends Component {
  constructor(props) {
  super(props);
}
  render() {
    const { bugTitle, className } = this.props;
    return(
        <div className={`bug-detail-header ${className}`}>
            <h1 className="bug-detail-header__title">{bugTitle}</h1>
        </div>
    )
}
}

export default BugDetailHeader;