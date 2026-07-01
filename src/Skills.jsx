import React from 'react';
import Card from './components/Card';
import CardHeader from './components/CardHeader';
import CardFooter from './components/CardFooter';
import './Skills.scss'

function Skills() {
  return (
    <div className="skills-content">
      <h1>SKILLS</h1>
      <div className="skills-cards">
          <Card
              head={<CardHeader className="skills-card-head" label="AI Engineering"/>}
              bottom={<CardFooter className="skills-card-footer"
                  text={(
                      <dl>
                          <dt>MCP</dt>
                          <dt>LangChain</dt>
                          <dt>LangSmith</dt>
                          <dt>OpenAI API</dt>
                      </dl>
                  )}
              />}
              makeFlip={false}/>
          <Card
              head={<CardHeader className="skills-card-head" label="Data Science"/>}
              bottom={<CardFooter className="skills-card-footer"
                  text={(
                      <dl>
                          <dt>Python</dt>
                          <dt>numpy & pandas</dt>
                          <dt>scikit-learn</dt>
                          <dt>XGBoost</dt>
                          <dt>Tensorflow Keras</dt>
                          <dt>spacy</dt>
                          <dt>statsmodels</dt>
                          <dt>Scipy</dt>
                          <dt>R</dt>
                          <dt>MATLAB</dt>
                      </dl>
                  )}
              />}
              makeFlip={false}/>
        <Card
          head={<CardHeader className="skills-card-head" label="ETL"/>}
          bottom={<CardFooter className="skills-card-footer"
            text={(
              <dl>
                  <dt>MongoDB</dt>
                  <dt>SQL</dt>
                  <dt>Hadoop</dt>
                  <dt>Impala</dt>
                  <dt>Hive</dt>
                  <dt>Oozie</dt>
              </dl>
            )}
          />}
          makeFlip={false}/>
          <Card
              head={<CardHeader className="skills-card-head" label="Business Intelligence (BI)"/>}
              bottom={<CardFooter className="skills-card-footer"
                  text={(
                      <dl>
                          <dt>PostHog</dt>
                          <dt>Tableau</dt>
                      </dl>
                  )}
              />}
              makeFlip={false}/>
        <Card
          head={<CardHeader className="skills-card-head" label="Software Development"/>}
          bottom={<CardFooter className="skills-card-footer" text={(
            <dl>
              <dt>TypeScript</dt>
              <dt>React</dt>
              <dt>JavaScript</dt>
            </dl>
          )}
          />}
          makeFlip={false}/>
        <Card
          head={<CardHeader className="skills-card-head" label="Others"/>}
          bottom={<CardFooter className="skills-card-footer" text={(
            <dl>
              <dt>Git</dt>
              <dt>Bash</dt>
              <dt>C/ C++</dt>
            </dl>
          )}
          />}
          makeFlip={false}/>
      </div>
    </div>

  );
}

export default Skills;