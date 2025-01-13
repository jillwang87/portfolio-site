import React from 'react';
import graphenLogo from './images/graphen-logo.png'
import entsocLogo from './images/entsoc-logo.png'
import adastraLogo from './images/adastra-logo.jpg'
import tdLogo from './images/td-logo.png'
import Card from './components/Card';
import './Experience.scss'

const CardHeader  = ({ src, text }) => (
  <div className='experience-card-head'>
    <img src={src} />
    <p>{text}</p>
  </div>
);

const CardFooter = ({ text, subtext }) => (
  <div className='experience-card-footer'>
    <p id="text">{text}</p>
    <p id="subtext">{subtext}</p>
  </div>
);


function Experience () {
  return (
    <div className="experience-content">
      <h1>EXPERIENCE</h1>
      <div className="experience-cards">
        <Card
            head={<CardHeader src={tdLogo} text="TD (via Adastra)" />}
            bottom={<CardFooter text="Data Analytics Developer" subtext="May 2021 - Present" />}
            makeFlip
        >
          <dl className="experience-card-back">
            <dt>
              - Developing a Python based data lifecycle management (DLM) tool: a scanner that leverages either local
              files or Hadoop tables' metadata to predict security classifications and retention periods using ML,
              Computational Linguistics, and NLP
            </dt>
            <dt>
              - Technology: Impala, Python, pandas, NumPy, scikit-learn, NLP, tkinter, spaCy
            </dt>
            <dt>
              - ETL from Hadoop and developing tableau dashboards
            </dt>
            <dt>
              - Technology: Impala, Python, pandas, NumPy, Tableau, Oozie
            </dt>
          </dl>
        </Card>
        <Card
            head={<CardHeader src={adastraLogo} text="Adastra North America" />}
            bottom={<CardFooter text="Data Science Consultant" subtext="Apr 2021 - Present" />}
            makeFlip={ false }
        >
          <dl className="experience-card-back">
            <dt>
              - Developed an unsupervised Holt Winter model on time series data and a supervised XGBoost model
              on multivariate data, both for the purpose of performing financial behaviour anomaly detection
            </dt>
            <dt>
              - Advised company leadership on strategies to combine the company's core product, a fast and
              efficient graph database, with machine learning models that helped land a proof-of-concept project
              with one of the largest banks in Taiwan
            </dt>
            <dt>
              - Developed the frontend of a React-based anti-money-laundering platform
            </dt>
            <dt>
              - Technologies: Python, Numpy, Pandas, scikit-learn, XGBoost, Git, JavaScript, React,
              GraphQL, ElasticSearch, SASS, CSS
            </dt>
          </dl>
        </Card>
        <Card
          head={<CardHeader src={graphenLogo} text="Graphen" />}
          bottom={<CardFooter text="Data Scientist & Software Developer" subtext="Jun 2019 - Aug 2019" />}
          makeFlip={ true }
        >
          <dl className="experience-card-back">
            <dt>
              - Developed an unsupervised Holt Winter model on time series data and a supervised XGBoost model
              on multivariate data, both for the purpose of performing financial behaviour anomaly detection
            </dt>
            <dt>
              - Advised company leadership on strategies to combine the company's core product, a fast and
              efficient graph database, with machine learning models that helped land a proof-of-concept project
              with one of the largest banks in Taiwan
            </dt>
            <dt>
              - Developed the frontend of a React-based anti-money-laundering platform
            </dt>
            <dt>
              - Technologies: Python, Numpy, Pandas, scikit-learn, XGBoost, Git, JavaScript, React,
              GraphQL, ElasticSearch, SASS, CSS
            </dt>
          </dl>
        </Card>
        <Card
          head={<CardHeader src={entsocLogo} text="EntSoc at UW" />}
          bottom={<CardFooter text="Software Developer" subtext="Jan 2019 - Apr 2020" />}
          makeFlip={true}
        >
          <dl>
            <dt>
              - Developed a website with the UI/UX team
            </dt>
            <dt>
              - Transitioned the static desktop website to a fully responsive, mobile friendly experience
            </dt>
            <dt>
              - Technologies: JavaScript, React, SASS, CSS3, Git
            </dt>
          </dl>
        </Card>
      </div>
    </div>

  );
}

export default Experience;