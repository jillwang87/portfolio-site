import React from 'react';
import graphenLogo from './images/graphen-logo.png'
import entsocLogo from './images/entsoc-logo.png'
import Card from './components/Card';
import './Experience.scss'

const CardHeader  = ({ src, text }) => (
  <div className='head'>
    <img src={src} />
    <p>{text}</p>
  </div>
);

const CardFooter = ({ text, subtext }) => (
  <div className='bottom'>
    <p style={{ fontSize: '3vmin' }}>{text}</p>
    <p style={{ fontSize: '2vmin' }}>{subtext}</p>
  </div>
);


function Experience () {
  return (
    <div className="experience-content">
      <h1>EXPERIENCE</h1>
      <div className="cards">
        <Card
          head={<CardHeader src={graphenLogo} text="Graphen" />}
          bottom={<CardFooter text="Data Scientist & Software Developer" subtext="Jun 2019 - Aug 2019" />}
          makeFlip={ true }
        >
          <dl style={{ fontSize: '1.5vmin', width: '90%', lineHeight: 1.7}}>
            <dd>
              - Developed an unsupervised Holt Winter model on time series data and a supervised XGBoost model
              on multivariate data, both for the purpose of performing financial behaviour anomaly detection
            </dd>
            <dd>
              - Advised company leadership on strategies to combine the company's core product, a fast and
              efficient graph database, with machine learning models that helped land a proof-of-concept project
              with one of the largest banks in Taiwan
            </dd>
            <dd>
              - Developed the frontend of a React-based anti-money-laundering platform
            </dd>
            <dd>
              - Technologies: Python, Numpy, Pandas, scikit-learn, XGBoost, Git, JavaScript, React,
              GraphQL, ElasticSearch, SASS, CSS
            </dd>
          </dl>
        </Card>
        <Card
          head={<CardHeader src={entsocLogo} text="EntSoc at UW" />}
          bottom={<CardFooter text="Software Developer" subtext="Jun 2019 - Aug 2019" />}
          makeFlip={true}
        >
          <dl style={{ fontSize: '1.5vmin', width: '90%', lineHeight: 1.7}}>
            <dd>
              - Developed a website with the UI/UX team
            </dd>
            <dd>
              - Transitioned the static desktop website to a fully responsive, mobile friendly experience
            </dd>
            <dd>
              - Link: <a href="https://entsoc.ca/">https://entsoc.ca/</a>
            </dd>
            <dd>
              - Technologies: JavaScript, React, SASS, CSS3, Git
            </dd>
          </dl>
        </Card>
      </div>
    </div>

  );
}

export default Experience;