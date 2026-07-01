import React from 'react';
import Card from './components/Card';
import CardHeader from './components/CardHeader';
import CardFooter from './components/CardFooter';
import './Awards.scss'
import novaTeamPhoto from './images/nova-team-photo.jpg'

function Awards() {
  return (
    <div className="awards-content">
      <h1>AWARDS</h1>
      <div className="awards-cards">
        <Card
          head={<CardHeader className="awards-card-head" label="NOVA - MLH StarterHacks 2018 Best Pitch (Finalist) Award"/>}
          bottom={
            <CardFooter
              className="awards-card-footer"
              text={
                <>
                  An Android app with an AI chat-bot designed to connect university students to on-campus mental
                  health resources <br/> Link:
                  <a href="https://devpost.com/software/nova-29i4zx" target="_blank"> Devpost</a>
                </>
              }
              src={novaTeamPhoto}
              alt="Team Photo"
            />
          }
        />
        <Card
          head={<CardHeader className="awards-card-head" label="University of Waterloo Term Dean’s Honours List"/>}
          bottom={
            <CardFooter className="awards-card-footer" text="Spring 2020 with term average 91.00%" />
          }
        />
        <Card
          head={<CardHeader className="awards-card-head" label="University of Waterloo Term Distinction"/>}
          bottom={
            <CardFooter
              className="awards-card-footer"
              text={
                <>
                  Fall 2020 with term average 86.33%, <br/> Winter 2020 with term average 83.00%
                </>
              }
            />
          }
        />
        <Card
          head={<CardHeader className="awards-card-head" label="University of Waterloo President’s Scholarship 2017"/>}
          bottom={
            <CardFooter
              className="awards-card-footer"
              text="Awarded upon entrance to the University of Waterloo to students with high school average 90-94.9%"
            />
          }
        />
      </div>
    </div>

  );
}

export default Awards;