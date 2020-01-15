import React from 'react';

export default function(className) {
  return (
    <div className={`bug-header ${className}`}>
        <div className="bug-header__id">Bug ID</div>
        <div className="bug-header__title">Title</div>
        <div className="bug-header__status">Status</div>
        <div className="bug-header__date">Created</div>
        <div className="bug-header__severity">Severity</div>
    </div>
)
}