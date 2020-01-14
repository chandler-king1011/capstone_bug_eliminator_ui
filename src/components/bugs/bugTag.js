import React, { Component } from 'react';

import history from '../../history';

class BugTag extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {bugs_id, bugs_title, bugs_status, bugs_created_date, bugs_severity} = this.props.bug;
        return (
            <a onClick={() => history.push(`/bug-detail/${bugs_id}`)} className="bug-tag">
                <div className="bug-tag__id">{bugs_id}</div>
                <div className="bug-tag__title">{bugs_title}</div>
                <div className="bug-tag__status">{bugs_status}</div>
                <div className="bug-tag__date">{bugs_created_date.slice(0, 10)}</div>
                <div className="bug-tag__severity">{bugs_severity}</div>
            </a>
        )
    }
}

export default BugTag;