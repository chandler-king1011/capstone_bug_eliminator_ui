import React from 'react';

export default function(className) {
  return (
    <div className={`bug-header ${className}`}>
        <div className="bug-header__id">Bug ID</div>
        <div className="bug-header__title">Title</div>
        <div className="bug-header__status">Created</div>
        <div className="bug-header__date">Severity</div>
        <div className="bug-header__severity">Creator</div>
    </div>
)
}