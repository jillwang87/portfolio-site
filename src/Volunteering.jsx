import React from 'react';
import entsocLogo from './images/entsoc-logo.png'
import Card from './components/Card';
import CardHeader from './components/CardHeader';
import CardFooter from './components/CardFooter';
import './Volunteering.scss'
import velocityLogo from "./images/velocity-logo.jpeg"
import SHLogo from "./images/SH-logo.png"
import HTNLogo from "./images/HTN-logo.png"
import TCLogo from "./images/TC-logo.png"
import BCChildrenLogo from "./images/BC-children-logo.png"

function Volunteering () {
  return (
    <div className="volunteering-content">
      <h1>VOLUNTEERING</h1>
      <p> I love volunteering for the purpose of education, entrepreneurship and health. </p>
      <div className="volunteering-cards">
        <Card
          head={<CardHeader className="volunteering-card-head" src={SHLogo} alt="StarterHacks Logo" />}
          bottom={<CardFooter className="volunteering-card-footer" text="Events Coordinator" subtext="Aug 2018 - Feb 2019" />}
          makeFlip
        >
          <dl>
            <dt>
              - Generated ideas for beginner-friendly and relevant tech education workshops
            </dt>
            <dt>
              - Scheduled activities and planned logistics for the two day hackathon
            </dt>
            <dt>
              - Managed a group of mentors and volunteers
            </dt>
          </dl>
        </Card>
        <Card
          head={<CardHeader className="volunteering-card-head" src={velocityLogo} alt="Velocity Logo" />}
          bottom={<CardFooter className="volunteering-card-footer" text="Campus Ambassador" subtext="Sep 2018 - Dec 2018" />}
          makeFlip
        >
          <dl className="volunteering-card-back">
            <dt>
              - Facilitated entrepreneurial events and spearheaded marketing initiatives
            </dt>
            <dt>
              - Enlisted interpersonal communication skills to build Velocity's brand presence
            </dt>
          </dl>
        </Card>
        <Card
          head={<CardHeader className="volunteering-card-head" src={HTNLogo} alt="Hack the North Logo" />}
          bottom={<CardFooter className="volunteering-card-footer" text="Volunteer" subtext="2017, 2018"/>}
        />
        <Card
          head={<CardHeader className="volunteering-card-head" src={TCLogo} alt="TZU CHI Logo" />}
          bottom={<CardFooter className="volunteering-card-footer" text="Teaching Assistant" subtext="Sep 2013 - Jan 2016"/>}
        />
        <Card
          head={<CardHeader className="volunteering-card-head" src={BCChildrenLogo} alt="BC Children Hospital Logo" />}
          bottom={<CardFooter className="volunteering-card-footer" text="Fundraiser" subtext="Dec 2014 - Oct 2015"/>}
        />
        <Card
          head={<CardHeader className="volunteering-card-head" label="Peer Tutoring" />}
          bottom={<CardFooter className="volunteering-card-footer" text="Science Class" subtext="High School Grade 11"/>}
        />
      </div>
    </div>

  );
}

export default Volunteering;