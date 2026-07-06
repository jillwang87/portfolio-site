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
                  health resources <br/>
                </>
              }
              src={novaTeamPhoto}
              alt="Team Photo"
            />
          }
        />
      </div>
    </div>

  );
}

export default Awards;