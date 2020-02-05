import React, { Component } from 'react';


class BugSorter extends Component {
  constructor(props) {
  super(props);

}
  render() {
    return(
        <div className="bug-sorter">
            <a onClick={() => this.props.sortFunc("Status", this.props.Id, this.props.token)} className="bug-sorter__link border">Status</a>
            <a onClick={() => this.props.sortFunc("Severity", this.props.Id, this.props.token)} className="bug-sorter__link border">Severity</a>
            <a onClick={() => this.props.sortFunc("Created", this.props.Id, this.props.token)} className="bug-sorter__link">Created Date</a>
        </div>
    )
}
}

export default BugSorter;