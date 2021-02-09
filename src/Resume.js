import resume from './docs/Jill_Wang_Resume_Data_Scientist.pdf';

import React from 'react';

function Resume () {
  return (
    <div className="resume-content">
      <h1>RESUME</h1>
      <iframe src={resume} width="100%" height="500px" />
    </div>

  );
}

export default Resume;