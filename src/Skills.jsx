import React from 'react';
import Card from './components/Card';
import './Skills.scss'

const CardHeader = ({ title }) => (
  <div className='skills-card-head'>
    <p>{title}</p>
  </div>
);

const CardFooter = ({ text }) => (
  <div className='skills-card-footer'>
    <p id="text">{text}</p>
  </div>
);


function Skills() {
  return (
    <div className="skills-content">
      <h1>SKILLS</h1>
      <div className="skills-cards">
          <Card
              head={<CardHeader title="Data Science"/>}
              bottom={<CardFooter
                  text={(
                      <dl>
                          <dt>Python</dt>
                          <dt>R</dt>
                          <dt>MATLAB</dt>
                          <dt>Tensorflow Keras</dt>
                          <dt>scikit-learn</dt>
                          <dt>spacy</dt>
                          <dt>numpy & pandas</dt>
                          <dt>Scipy</dt>
                          <dt>statsmodels</dt>
                          <dt>XGBoost</dt>
                      </dl>
                  )}
              />}
              makeFlip={false}/>
        <Card
          head={<CardHeader title="ETL"/>}
          bottom={<CardFooter
            text={(
              <dl>
                  <dt>Impala</dt>
                  <dt>Hive</dt>
                  <dt>Oozie</dt>
                  <dt>SQL</dt>
              </dl>
            )}
          />}
          makeFlip={false}/>
          <Card
              head={<CardHeader title="Business Intelligence (BI)"/>}
              bottom={<CardFooter
                  text={(
                      <dl>
                          <dt>Tableau</dt>
                      </dl>
                  )}
              />}
              makeFlip={false}/>
        <Card
          head={<CardHeader title="Frontend Development" text="EntSoc at UW"/>}
          bottom={<CardFooter text={(
            <dl>
              <dt>JavaScript</dt>
              <dt>HTML</dt>
              <dt>CSS / SASS</dt>
              <dt>React</dt>
            </dl>
          )}
          />}
          makeFlip={false}/>
        <Card
          head={<CardHeader title="Others" text="EntSoc at UW"/>}
          bottom={<CardFooter text={(
            <dl>
              <dt>C/ C++</dt>
              <dt>Bash</dt>
              <dt>Git</dt>
            </dl>
          )}
          />}
          makeFlip={false}/>
      </div>
    </div>

  );
}

export default Skills;