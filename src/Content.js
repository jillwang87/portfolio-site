import React, { useState } from 'react';
import './Content.scss';
import { Link, useRouteMatch } from 'react-router-dom';
import Icons from './components/Icons';

const rightCaret = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z"
      fill="currentColor"
    />
  </svg>
);

const LeftMenuItem = ({ setCurrent, children, current }) => (
  <Link className="left-menu-item" to={`/content/${children.toLowerCase()}`} replace>
    { current === children.toLowerCase() && rightCaret }
    {children}
  </Link>
);

const Content = () => {
  const onContentPage = useRouteMatch('/content/:current');
  const { current } = onContentPage?.params || { current: 'about' };
  let content;
  switch (current) {
    case 'about':
      content = (<> about me yolo 123 </>);
      break;
    case 'education':
      content = (<> me wecomandayshuns </>);
      break;
    case 'experience':
      content = (<> experience </>);
      break;
    case 'skills':
      content = (<> skills </>);
      break;
    case 'recommendations':
      content = (<> recommendationse </>);
      break;
    case 'projects':
      content = (<> projects </>);
      break;
    case 'volunteering':
      content = (<> volun </>);
      break;
    case 'awards':
      content = (<> awards </>);
      break;
    case 'resume':
      content = (<> resume </>);
      break;
    default:
      throw new Error(`Unexpected current content item: ${current}`);
  }
  return (
    <div className="content">
      <div className="left-menu">
        <h2>Jill Wang</h2>
        <svg id="line" width="100%" height="24" viewBox="0 0 300 24">
          <path d="M 0 10 H 300" stroke="#606060"/>
        </svg>
        <LeftMenuItem current={current}>About</LeftMenuItem>
        <LeftMenuItem current={current}>Education</LeftMenuItem>
        <LeftMenuItem current={current}>Experience</LeftMenuItem>
        <LeftMenuItem current={current}>Skills</LeftMenuItem>
        <LeftMenuItem current={current}>Recommendations</LeftMenuItem>
        <LeftMenuItem current={current}>Projects</LeftMenuItem>
        <LeftMenuItem current={current}>Volunteering</LeftMenuItem>
        <LeftMenuItem current={current}>Awards</LeftMenuItem>
        <LeftMenuItem current={current}>Resume</LeftMenuItem>
        <Icons />
        <p> &copy; 2021 Jill Yu Chieh Wang</p>
      </div>
      <div className="about-content">
        {content}
      </div>
    </div>
  );
};

export default Content;
