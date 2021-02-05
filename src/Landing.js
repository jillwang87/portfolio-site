import React from 'react';
import email_icon from './images/email-icon.svg';
import github_icon from './images/github-icon.png';
import linkedin_icon from './images/linkedin-icon.svg';
import kaggle_icon from './images/kaggle-icon.png';
import caret from './images/arrow-head.png'
import './Landing.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const kaggle_addr = "https://www.kaggle.com/jillwang87";
const github_addr = "https://github.com/jillwang87";
const linkedin_addr = "https://www.linkedin.com/in/jill-ycwang98/";
const email_addr = "jill.ycwang98@gmail.com";



function create_icon_link(addr, title, img) {
    return (
        <div className="icon">
            <a href={addr}>
                <img src={img} alt="title" />
            </a>
        </div>
    )
}

function Landing() {
    return (
        <div className="landing">
            <div className="landing-subheader">
                <h4>Data Scientist & Software Developer</h4>
            </div>
            <header className="landing-header">
              <h1>Jill (Yu-Chieh) Wang</h1>
            </header>
            <div className="icons">
                { create_icon_link(kaggle_addr, "Kaggle", kaggle_icon) }
                { create_icon_link(github_addr, "GitHub", github_icon) }
                { create_icon_link(linkedin_addr, "LinkedIn", linkedin_icon) }
                { create_icon_link(email_addr, "Email", email_icon) }
            </div>
            <div className="enter">
                <h7>enter</h7>
                <Router>
                    <Link to="/content"><img src={caret} alt="title" /></Link>
                </Router>
            </div>
        </div>
  );
}

export default Landing;
