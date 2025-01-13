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
          <p> &emsp; With over four years of experience in the data field, I have had the privilege of working across
              diverse roles and environments, particularly in startups and R&D divisions.
              These settings have honed my ability to quickly adapt to new technologies and skills.
              My professional journey spans roles such as:
              <ul>
                  <li>Data Engineer: Building data architectures and managing ETL pipelines to ensure seamless data
                      integration, enabling downstream analytical and machine learning workflows.
                  </li>
                  <li>Data Analyst: Extracting and presenting actionable insights using BI tools like Tableau to empower
                      business decision-making.
                  </li>
                  <li>Machine Learning Engineer: Designing and implementing machine learning pipelines to leverage large
                      datasets for predictive and classification models.
                  </li>
              </ul>
          </p>
          <h2>
              Academic Foundation
          </h2>
          <p>
              &emsp;I graduated from the University of Waterloo with dual degrees in Computational Mathematics and
              Statistics.
              These programs provided me with a robust foundation in computer science, mathematics, and
              statistics—essential
              pillars of modern data science. Key areas of study included:
              <ul>
                  <li>Mathematics: Mathematical optimization, Numerical Analysis, and Applied Statistics.</li>
                  <li>Computer Science: Data structures, Algorithmic Problem-Solving, Databases, and Object-Oriented
                      programming (OOP).
                  </li>
              </ul>
              &emsp;This dual-degree background has equipped me with the ability to seamlessly bridge the gap between
              theoretical mathematics and its practical applications in coding, enabling me to build efficient,
              data-driven solutions.
          </p>
          <h2>
              Passion for Data Science
          </h2>
          <p> &emsp; I am passionate about data science; specifically, classification modelling, prediction modelling,
              and automating data workflows. I'm lucky to be entering the field during the dawn of the AI revolution.
              Data science helps me recognize that there is an order in this world, an order that can be expressed with
              mathematical models and programmed into algorithms. I can then rely on these algorithms to aid decision
              making
              and optimize outcomes. It is fascinating to be able to use my knowledge in mathematics, statistics and
              computer
              science to build automated solutions that could extract important insight on all kinds of phenomena.
          </p>
          <h2>
                Beyond Work
          </h2>
          <p> &emsp; During my free time, I love cooking, doing interior design in Sims, just about
              anything to fulfill my creative side. I am also a gamer, my favourite category of games is simulation/strategy,
              for example, RimWorld, Cyberpunk 2077, Cities: Skylines, and Civilization VI.
          </p>
          <img src={profilePhoto}/>
      </div>

  );
}

export default About;
