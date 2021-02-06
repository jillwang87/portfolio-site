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
      <p> &emsp; I am passionate in classification modelling, prediction modelling, and automating data workflows. During my
        free time, I love cooking, doing interior designs in sims, practicing makeup, just about anything to fulfill my
        creative side.
      </p>
      <img src={profilePhoto} />
    </div>

  );
}

export default About;
