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
            summary="Built an internal agent/MCP server with 25+ tools connecting AI agents to real-time portfolio and market data"
            makeFlip
        >
          <dl className="experience-card-back">
            <dt>
              - Built and shipped 25+ MCP tools serving an internal AI agent and external third-party MCP clients, powering a complete, customizable financial health analysis experience
            </dt>
            <dt>
              - Built rich metadata contracts for third-party MCP clients, user-friendly tool inputs, MongoDB-backed pagination to optimize query load for large result sets, and MongoDB-backed vector search for answering help questions
            </dt>
            <dt>
              - Built and shipped a browsable prompt catalog that surfaces curated financial analysis workflows to users
            </dt>
            <dt>
              - Engineered an LLM application with LangGraph to build a custom agent workflow, and produced prompt safety guardrails
            </dt>
            <dt>
              - Shipped directive MCP tools and tier-based upgrade nudges that drove account-linking conversion, subscription growth, and rising assets under monitoring
            </dt>
            <dt>
              - Unified the upgrade experience across subscription tiers, combining PostHog hooks, React hooks, and IntersectionObserver to register impressions versus clicks on upgrade call-to-action components, giving accurate engagement analytics
            </dt>
            <dt>
              - Built SQL-driven PostHog dashboards and funnel analyses for the marketing public site, core web app, MCP server, and internal agent
            </dt>
            <dt>
              - Built efficient ETL pipelines for vendor APIs (Xignite, Morningstar, Yahoo Finance) and government sources (SEC, MSRB) that meticulously standardize, validate, and enhance millions of records to maintain the quality of the securities master database
            </dt>
            <dt>
              - Developed real-time performance feedback and diagnostic metrics, portfolio composition breakdown, and benchmarks for users' investment portfolios
            </dt>
            <dt>
              - Technology: TypeScript, MongoDB, Model Context Protocol (MCP), React, LangChain, Node.js, NestJS, GraphQL
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
              - Built an XGBRegressor sales-forecasting ML model on PySpark pipelines processing millions of rows to power gap and attention marketing analysis
              (Gap: products not sold in a store but that should be; Attention: products selling poorly that need attention)
            </dt>
            <dt>
              - Technology: Python, AWS SageMaker, XGBoost, SQL
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
              - Built an address-clustering AI model (Google Direction API) to optimize delivery routing
            </dt>
            <dt>
              - Built a truck-load optimization model by mathematical formulation (Google OR-Tools Linear Programming) — together reducing freight costs and improving sales margins
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
              - Owned the end-to-end data science lifecycle for a security classification &amp; retention-period prediction model (data lifecycle management application), partnering with data stewards to gather and validate training data across company digital assets
            </dt>
            <dt>
              - Engineered text features using vector embeddings and NLP techniques to capture semantic signals from document content, cleaned and consolidated additional structured features, then applied Principal Component Analysis (PCA) to denoise the combined feature set before training
            </dt>
            <dt>
              - Trained and tuned an XGBClassifier with Hyperopt to predict security classifications and retention periods, delivering predictions in minutes that previously took months of manual work from data stewards
            </dt>
            <dt>
              - Built ETL pipelines on the Apache big data ecosystem feeding real-time data straight from source systems into 50+ interactive Tableau executive dashboards, engineering custom formulas to handle the underlying calculations
            </dt>
            <dt>
              - Built a user-friendly tkinter interface for business users to point the pipeline at local files or a Hadoop database and get predictions back as an Excel file
            </dt>
            <dt>
              - Technology: Impala, Python, scikit-learn, XGBoost, Hyperopt, PCA, NLP, spaCy, tkinter, Tableau, Oozie
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
              - Delivered scalable analytics and machine learning solutions across enterprise engagements at TD Bank, Taiga Building Products Ltd., and Mark Anthony Group
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
              - Developed an unsupervised model on time-series data and a supervised model on multivariate data for financial behaviour anomaly/fraud detection, applying statistical methods to design a systematic risk (anomaly) score and a numerical analysis method (power spectral density) to improve time series model accuracy
            </dt>
            <dt>
              - Advised company leadership on strategies to combine the company's core graph-database product with machine learning models, helping land a proof-of-concept project with one of the largest banks in Taiwan
            </dt>
            <dt>
              - Developed the front end of a React-based anti-money-laundering platform
            </dt>
            <dt>
              - Technology: Python, NumPy, pandas, scikit-learn, XGBoost, JavaScript, React
            </dt>
          </dl>
        </Card>
        {/* <Card
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
        </Card> */}
      </div>
    </div>

  );
}

export default Experience;