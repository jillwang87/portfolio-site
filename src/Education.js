import React from 'react';
import uwLogo from './images/uw-logo.png'
import './Education.scss';

function Education () {
  return (
    <div className="education-content">
      <h1>EDUCATION</h1>
      <img src={uwLogo} alt="UW Logo" />
      <pre>
        Dual degrees in {'\n'}
        Computational Mathematics, Honours {'\n'}
        & Statistics, Honours {'\n'}
        with a Computing Option
      </pre>
    </div>
  );
}

export default Education;
