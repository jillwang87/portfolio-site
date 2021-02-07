import React, { useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import Icons from './components/Icons';
import caret from './images/arrow-head.png'
import classNames from 'classnames';
import Content from "./Content";
import './Landing.scss';

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
      <Hero showingNextPage={onContentPage} />
      <Content />
    </div>
  );
}

export default Landing;
