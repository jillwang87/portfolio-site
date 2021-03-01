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
      <h2>
        Relevant Coursework:
      </h2>
      <h3>
        Data Science
      </h3>
      <p>
        <dl>
          <dt>Statistical Learning-Classification</dt>
          <dt>Sampling and Experimental Design </dt>
          <dt>Generalized Linear Models & Applications</dt>
          <dt>Applied Probability</dt>
          <dt>Data Visualization</dt>
          <dt>Computational Statistics and Data Analysis</dt>
          <dt>Mathematical Statistics </dt>
        </dl>
      </p>
      <h3>
        Programming
      </h3>
      <p>
        <dl>
          <dt>Object-Oriented Software Development (C++) </dt>
          <dt>Data Types and Structures (Python) </dt>
          <dt>Algorithmic Problem Solving (Python) </dt>
          <dt> Computer Applications in Business: Databases (SQLite) </dt>
        </dl>
      </p>
      <h3>
        Applied Mathematics
      </h3>
      <p>
        <dl>
          <dt>Applied Cryptography  </dt>
          <dt>Deterministic Operation Research Models  </dt>
          <dt>Computational Methods for Differential Equations </dt>
        </dl>
      </p>
    </div>
  );
}

export default Education;
