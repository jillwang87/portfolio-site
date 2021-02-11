import React from 'react';
import Card from './components/Card';
import './Awards.scss'
import novaTeamPhoto from './images/nova-team-photo.jpg'

const CardHeader = ({ title }) => (
  <div className="awards-card-head">
    <p>{title}</p>
  </div>
);

const CardFooter = ({ src, text, withImage }) => (
  <div className="awards-card-footer">
    { withImage && <img src={src} alt={"Team Photo"}/> }
    {text}
  </div>
);


function Awards() {
  return (
    <div className="awards-content">
      <h1>AWARDS</h1>
      <div className="awards-cards">
        <Card
          head={<CardHeader title="NOVA - MLH StarterHacks 2018 Best Pitch (Finalist) Award"/>}
          bottom={
            <CardFooter
              text={
                <p id="text">
                  An Android app with an AI chat-bot designed to connect university students to on-campus mental
                  health resources <br/> Link:
                  <a href="https://devpost.com/software/nova-29i4zx"> Devpost </a>
                </p>
              }
              src={novaTeamPhoto}
              withImage={true}
            />
          }
        />
        <Card
          head={<CardHeader title="University of Waterloo Term Dean’s Honours List"/>}
          bottom={
            <CardFooter
              text={
                <p id="text">
                  Spring 2020 with term average 91.00%
                </p>
              }
            />
          }
        />
        <Card
          head={<CardHeader title="University of Waterloo Term Distinction"/>}
          bottom={
            <CardFooter
              text={
                <p id="text">
                  F all 2020 with term average 86.33%, <br/> Winter 2020 with term average 83.00%
                </p>
              }
            />
          }
        />
        <Card
          head={<CardHeader title="University of Waterloo President’s Scholarship 2017"/>}
          bottom={
            <CardFooter
              text={
                <p id="text">
                  Awarded upon entrance to the University of Waterloo to students with high school average 90-94.9%
                </p>
              }
            />
          }
        />
      </div>
    </div>

  );
}

export default Awards;