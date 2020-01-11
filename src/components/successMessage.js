import React from 'react';

import history from '../history';

export default function Success(className, message, linkName, link) {
  return (
    <div className={`${className} success-message`}>
        <div className="success-message__message">
            {message}
        </div>
        <button className="success-message__link" onClick={() => history.push(link)}>{linkName}</button>
    </div>
)
}