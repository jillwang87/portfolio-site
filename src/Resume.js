import resume from './docs/Jill_Wang_Resume_Data_Scientist.pdf';
import React from 'react';
import './Resume.scss'

function Resume () {
  return (
    <div className="resume-content">
      <h1>RESUME</h1>
      <iframe className="resume-frame" src={resume} width="100%" />
    </div>

  );
}

export default Resume;