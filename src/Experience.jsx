import React from 'react';
import graphenLogo from './images/graphen-logo.png'
import entsocLogo from './images/entsoc-logo.png'
import adastraLogo from './images/adastra-logo.jpg'
import tdLogo from './images/td-logo.png'
import taigaLogo from './images/taiga-logo.jpg'
import markAnthonyLogo from './images/mark-anthony-group-logo.jpg'
import truthifiLogo from './images/truthifi-logo.png'
import Card from './components/Card';
import CardHeader from './components/CardHeader';
import CardFooter from './components/CardFooter';
import './Experience.scss'

function Experience () {
  return (
    <div className="experience-content">
      <h1>EXPERIENCE</h1>
      <div className="experience-cards">
        <Card
            head={<CardHeader className="experience-card-head" src={truthifiLogo} label="Truthifi" />}
            bottom={<CardFooter className="experience-card-footer" text="Head of Analytics" subtext="Jul 2023 - Present" />}
            summary="Built an internal agent/MCP server with 20+ tools connecting AI agents to real-time portfolio and market data"
            makeFlip
        >
          <dl className="experience-card-back">
            <dt>
              - Built an internal agent/MCP server exposing 20+ tools that surface clients' portfolio and market data to AI agents, powering a complete financial health analysis experience
            </dt>
            <dt>
              - Designed advanced algorithms leveraging regex matching and natural language processing
              techniques to accurately reconcile securities across sources with inconsistent or incomplete unique identifiers
            </dt>
            <dt>
              - Developed real-time performance feedback and diagnostic tools to benchmark investment portfolios against comprehensive market data
            </dt>
            <dt>
              - Engineered robust data-cleaning solutions to meticulously standardize, validate, and enhance the quality of market data, ensuring precision and reliability for downstream analysis
            </dt>
            <dt>
              - Integrated and blended data from APIs of vendors such as Xignite, Morningstar, Yahoo Finance,
              public data from the government such as from the SEC, the Municipal Securities Rulemaking Board (MSRB) and custom web-scraped sources
            </dt>
            <dt>
              - Collaborated cross-functionally with product and engineering teams to integrate data insights into a seamless customer platform experience
            </dt>
            <dt>
              - Technology: TypeScript, MongoDB, AWS, MCP
            </dt>
          </dl>
        </Card>
        <Card
            head={<CardHeader className="experience-card-head" src={markAnthonyLogo} label="Mark Anthony Group (via Adastra)" />}
            bottom={<CardFooter className="experience-card-footer" text="Data Scientist" subtext="Mar 2023 - Jun 2023" />}
            summary="Built an XGBoost sales-forecasting model on PySpark pipelines processing millions of rows to drive marketing decisions"
            makeFlip
        >
          <dl className="experience-card-back">
            <dt>
              - Built a sales forecasting Machine Learning (ML) model for the purpose of a gap and attention
              marketing analysis (Gap: identify products that are not sold in a store, but should be sold;
              Attention: identify products that are not selling well and require attention)
            </dt>
            <dt>
              - Utilize PySpark to build ML pipelines to process millions of rows of data
            </dt>
            <dt>
              - Technology: Python, AWS SageMaker, XGBRegressor, SQL
            </dt>
          </dl>
        </Card>
        <Card
            head={<CardHeader className="experience-card-head" src={taigaLogo} label="Taiga Building Products Ltd. (via Adastra)" />}
            bottom={<CardFooter className="experience-card-footer" text="Operation Research Analyst" subtext="Aug 2022 - Feb 2023" />}
            summary="Combined a clustering AI model with mathematical optimization to cut freight costs and improve delivery routing"
            makeFlip
        >
          <dl className="experience-card-back">
            <dt>
              - Built a system to optimize distribution routes and truck-loads, reducing freight costs and improving sales margins
            </dt>
            <dt>
              - Built an address-clustering algorithm to cluster customers' geographic locations and optimize delivery routes using a clustering AI model and Google Direction API
            </dt>
            <dt>
              - Built a truck-load optimization model by mathematical formulation using Google OR
            </dt>
            <dt>
              - Technology: Python, Azure ML, Google OR-Tools, Google Direction API
            </dt>
          </dl>
        </Card>
        <Card
            head={<CardHeader className="experience-card-head" src={tdLogo} label="TD (via Adastra)" />}
            bottom={<CardFooter className="experience-card-footer" text="Data Analytics Developer" subtext="May 2021 - Jun 2022" />}
            summary="Built an NLP-driven ML pipeline that automated security classification and retention decisions across a Hadoop-scale data lake"
            makeFlip
        >
          <dl className="experience-card-back">
            <dt>
              - Built a Python-based data lifecycle management (DLM) application
              that uses Computational Linguistics and Natural Language Processing (NLP)
              to extract features for a machine learning pipeline which predicts security classifications
              and retention periods
            </dt>
            <dt>
              - Built a user-friendly interface with tkinter for business users to provide a location
              (either local files or a Hadoop database) to scan and automatically run the ML pipeline,
              emitting the predictions in an Excel file
            </dt>
            <dt>
              - ETL from Hadoop using Impala and developing Tableau dashboards to present insights to business executives
            </dt>
            <dt>
              - Technology: Impala, Python, scikit-learn, NLP, tkinter, spaCy, Tableau, Oozie
            </dt>
          </dl>
        </Card>
        <Card
            head={<CardHeader className="experience-card-head" src={adastraLogo} label="Adastra North America" />}
            bottom={<CardFooter className="experience-card-footer" text="Data Science Consultant" subtext="Apr 2021 - Jun 2023" />}
            summary="Trained extensively in cloud ML architecture, delivering analytics and ML solutions across three enterprise clients"
            makeFlip
        >
          <dl className="experience-card-back">
            <dt>
              - Extensive training in leveraging cloud platforms to design and implement scalable analytics and machine learning solutions
            </dt>
            <dt>
              - Assigned to TD Bank, Taiga Building Products Ltd. and Mark Anthony Group
            </dt>
          </dl>
        </Card>
        <Card
          head={<CardHeader className="experience-card-head" src={graphenLogo} label="Graphen" />}
          bottom={<CardFooter className="experience-card-footer" text="Data Scientist & Software Developer" subtext="Jun 2019 - Aug 2019" />}
          summary="Built unsupervised and supervised ML models for financial anomaly detection, helping land a bank proof-of-concept"
          makeFlip={ true }
        >
          <dl className="experience-card-back">
            <dt>
              - Developed an unsupervised Holt Winter model on time series data and a supervised XGBoost model
              on multivariate data, both for the purpose of performing financial behaviour anomaly detection
            </dt>
            <dt>
              - Applied statistical methods to design a systematic way to calculate a risk (anomaly) score
            </dt>
            <dt>
              - Applied a numerical analysis method (power spectral density) to improve the accuracy of a time series model
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
          head={<CardHeader className="experience-card-head" src={entsocLogo} label="EntSoc at UW" />}
          bottom={<CardFooter className="experience-card-footer" text="Software Developer" subtext="Jan 2019 - Apr 2020" />}
          summary="Rebuilt a static site into a fully responsive React web app alongside a UI/UX team"
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