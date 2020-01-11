import React from 'react';

export default  function signUpCriteria(className) {
  return (
    <div className={className}>
        <div className="password-criteria__title">Password Criteria</div>
        <ul>
            <li>At least 8 characters long.</li>
            <li>Must contain at least one lowercase letter.</li>
            <li>Must contain at least one uppercase letter.</li>
            <li>Must contain at least one number.</li>
            <li>Must contain at least one special character.</li>
        </ul>
    </div>
)
}