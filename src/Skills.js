import React from 'react';
import Card from './components/Card';
import './Skills.scss'

const CardHeader = ({ title }) => (
  <div className='skills-card-head'>
    <p>{title}</p>
  </div>
);

const CardFooter = ({ text }) => (
  <div className='skills-card-bottom'>
    <p id="text">{text}</p>
  </div>
);


function Skills() {
  return (
    <div className="experience-content">
      <h1>SKILLS</h1>
      <div className="cards">
        <Card
          head={<CardHeader title="Data Science"/>}
          bottom={<CardFooter
            text={(
              <dl>
                <dd>Python</dd>
                <dd>R</dd>
                <dd>MATLAB</dd>
                <dd>Tensorflow Keras</dd>
                <dd>scikit-learn</dd>
                <dd>Numpy & Pandas</dd>
                <dd>Scipy</dd>
                <dd>statsmodels</dd>
                <dd>XGBoost</dd>
              </dl>
            )}
          />}
          makeFlip={false}/>
        <Card
          head={<CardHeader title="Frontend Development" text="EntSoc at UW"/>}
          bottom={<CardFooter text={(
            <dl>
              <dd>JavaScript</dd>
              <dd>HTML & CSS/ SASS</dd>
              <dd>React</dd>
            </dl>
          )}
          />}
          makeFlip={false}/>
        <Card
          head={<CardHeader title="Others" text="EntSoc at UW"/>}
          bottom={<CardFooter text={(
            <dl>
              <dd>C/ C++</dd>
              <dd>Bash</dd>
              <dd>Git</dd>
            </dl>
          )}
          />}
          makeFlip={false}/>
      </div>
    </div>

  );
}

export default Skills;