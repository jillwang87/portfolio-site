import React from 'react';
import profilePhoto from './images/profile-photo.jpg'
import './About.scss';

function About () {
  return (
      <div className="about-content">
          <h1>ABOUT ME</h1>
          <h2>
              Work Experience
          </h2>
          <p> &emsp; With over five years of experience in the data field, I have worked across
              diverse roles and environments, particularly in startups and R&D divisions.
              These settings have honed my ability to quickly adapt to new technologies and skills.
              My professional journey spans roles such as:
              <ul>
                  <li>Data Engineer: Building data architectures and managing ETL pipelines, including data cleaning
                      and validation, to enable downstream analytical and ML workflows.
                  </li>
                  <li>Data Analyst / Product Analytics: Extracting actionable insights using BI tools like Tableau and
                      PostHog, building dashboards to track product metrics, spot issues, and drive fixes alongside
                      the product team.
                  </li>
                  <li>Machine Learning Engineer: Designing and implementing ML pipelines to leverage large
                      datasets for predictive and classification models.
                  </li>
                  <li>AI Solutions Architect / MCP Developer: Designing chatbot architectures and MCP ecosystems,
                      including prompt engineering, tool design, and integrations between LLMs and external systems.
                  </li>
              </ul>
              &emsp; I approach engineering by thinking through problems thoroughly and planning before I build,
              backed by rigorous testing to catch edge cases early. I've been recognized at work for adapting
              efficiently to shifting requirements without compromising code quality, keeping it clean,
              well-documented, and easy to understand, review, and extend.
          </p>
          <h2>
              Academic Foundation
          </h2>
          <p>
              &emsp; This rigor traces back to my dual degrees in Computational Mathematics and Statistics from the
              University of Waterloo, spanning Mathematical Optimization, Numerical Analysis, and Applied Statistics
              on one side, and Data Structures, Algorithmic Problem-Solving, Databases, and Object-Oriented
              Programming on the other. One side taught me to reason carefully and build arguments step by step; the
              other taught me to structure systems around clear, reusable patterns. Together, they shape how I plan,
              reason through, and structure every engineering decision.
          </p>
          <h2>
              Passion for Data Science
          </h2>
          <p> &emsp; I'm passionate about predictive modeling, intelligent automation, and the emerging field of AI
              agents, especially as LLMs reshape how people interact with technology. I enjoy blending traditional ML
              with modern AI techniques, from predictive models to architecting agent workflows and MCP tools
              connecting AI systems with external data and services. What draws me to this field is the belief that
              complex problems hold patterns that mathematics, statistics, and computation can uncover.
          </p>
          <img src={profilePhoto}/>
      </div>

  );
}

export default About;
