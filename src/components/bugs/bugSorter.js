import React, { Component } from 'react';


class BugSorter extends Component {
  constructor(props) {
  super(props);

}
  render() {
    return(
        <div className="bug-sorter">
            <a onClick={() => console.log("sort")} className="bug-sorter__link border">Status</a>
            <a onClick={() => console.log("sort")} className="bug-sorter__link border">Severity</a>
            <a onClick={() => console.log("sort")} className="bug-sorter__link">Created Date</a>
        </div>
    )
}
}

export default BugSorter;