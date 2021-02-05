import React, { useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import Icons from './components/Icons';
import emailIcon from './images/email-icon.svg';
import githubIcon from './images/github-icon.png';
import linkedinIcon from './images/linkedin-icon.svg';
import kaggleIcon from './images/kaggle-icon.png';
import caret from './images/arrow-head.png'
import classNames from 'classnames';
import Content from "./Content";
import './Landing.scss';

const kaggleAddr = "https://www.kaggle.com/jillwang87";
const githubAddr = "https://github.com/jillwang87";
const linkedinAddr = "https://www.linkedin.com/in/jill-ycwang98/";
const emailAddr = "jill.ycwang98@gmail.com";



const createIconLink = (addr, title, img) => (
  <div className="icon">
    <a href={addr}>
      <img src={img} alt={title} />
    </a>
  </div>
);

const Hero = ({ showingNextPage }) => (
  <div className={classNames('hero', showingNextPage && 'showing-next')} tabIndex={showingNextPage ? undefined : '-1'}>
    <div className="landing-subheader">
      <h4>Data Scientist & Software Developer</h4>
    </div>
    <header className="landing-header">
      <h1>Jill (Yu-Chieh) Wang</h1>
    </header>
    <Icons />
    <Link to="/content/about" className="enter">
      <h6>enter</h6>
      <div><img src={caret} alt="title" /></div>
    </Link>
  </div>
);

function Landing() {
  const onContentPage = useRouteMatch('/content');
  return (
    <div className="page-content">

      <Hero showingNextPage={!!onContentPage} />
      <Content />
    </div>
  );
}

export default Landing;
