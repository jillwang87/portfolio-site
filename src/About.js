import React from 'react';
import profilePhoto from './images/profile-photo.jpg'
import './About.scss';

function About () {
  return (
    <div className="about-content">
      <h1>ABOUT ME</h1>
      <p> &emsp; I am a recent University of Waterloo graduate with dual degrees in Computational Mathematics and Statistics.
        My studies gave me a deep foundation in the mathematics behind machine learning while giving me a solid
        foundation in software development methodologies. The mathematical subjects include mathematical optimization,
        statistics, and numerical analysis. The software subjects include data structures, algorithmic problem solving,
        databases, and OOP.
      </p>
      <p> &emsp; I am passionate about data science; specifically, classification modelling, prediction modelling,
        and automating data workflows. I'm lucky to be entering the field during the dawn of the AI revolution.
        Data science helps me recognize that there is an order in this world, an order that can be expressed with
        mathematical models and programmed into algorithms. I can then rely on these algorithms to aid decision making
        and optimize outcomes. It is fascinating to be able to use my knowledge in mathematics, statistics and computer
        science to build automated solutions that could extract important information on all kinds of phenomena.
      </p>
      <p> &emsp; During my free time, I love cooking, doing interior designs in Sims, practicing makeup, just about
        anything to fulfill my creative side.
      </p>
      <img src={profilePhoto} />
    </div>

  );
}

export default About;
