import React from 'react';
import entsocLogo from './images/entsoc-logo.png'
import Card from './components/Card';
import './Volunteering.scss'
import velocityLogo from "./images/velocity-logo.jpeg"
import SHLogo from "./images/SH-logo.png"
import HTNLogo from "./images/HTN-logo.png"
import TCLogo from "./images/TC-logo.png"
import BCChildrenLogo from "./images/BC-children-logo.png"


const CardHeader  = ({ src, alt, text, withText = false, withImage = true}) => (
  <div className='volunteering-card-head'>
    {withImage && <img src={src} alt={alt} />}
    {withText && <p>{text}</p>}
  </div>
);

const CardFooter = ({ text, subtext }) => (
  <div className='volunteering-card-footer'>
    <p id="text">{text}</p>
    <p id="subtext">{subtext}</p>
  </div>
);


function Volunteering () {
  return (
    <div className="volunteering-content">
      <h1>VOLUNTEERING</h1>
      <p> I love volunteering for the purpose of education, entrepreneurship and health. </p>
      <div className="volunteering-cards">
        <Card
          head={<CardHeader src={SHLogo} alt="StarterHacks Logo" withText={false} />}
          bottom={<CardFooter text="Events Coordinator" subtext="Aug 2018 - Feb 2019" />}
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
          head={<CardHeader src={velocityLogo} alt="Velocity Logo" withText={false} />}
          bottom={<CardFooter text="Campus Ambassador" subtext="Sep 2018 - Dec 2018" />}
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
          head={<CardHeader src={HTNLogo} alt="Hack the North Logo" withText={false}/>}
          bottom={<CardFooter text="Volunteer" subtext="2017, 2018"/>}
        />
        <Card
          head={<CardHeader src={TCLogo} alt="TZU CHI Logo" withText={false}/>}
          bottom={<CardFooter text="Teaching Assistant" subtext="Sep 2013 - Jan 2016"/>}
        />
        <Card
          head={<CardHeader src={BCChildrenLogo} alt="BC Children Hospital Logo" withText={false}/>}
          bottom={<CardFooter text="Fundraiser" subtext="Dec 2014 - Oct 2015"/>}
        />
        <Card
          head={<CardHeader text="Peer Tutoring" withText={true} withImage={false} />}
          bottom={<CardFooter text="Science Class" subtext="High School Grade 11"/>}
        />
      </div>
    </div>

  );
}

export default Volunteering;