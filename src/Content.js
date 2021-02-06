import React, { useRef } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import Icons from './components/Icons';
import About from './About'
import Education from './Education';
import Experience from './Experience';
import './Content.scss';

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
    <p>{children}</p>
  </Link>
);

const Content = () => {
  const lastContent = useRef('about');
  const onContentPage = useRouteMatch('/content/:current');
  const { current } = onContentPage?.params || { current: lastContent.current };
  lastContent.current = current;
  let content;
  switch (current) {
    case 'about':
      content = (<About />);
      break;
    case 'education':
      content = (<Education />);
      break;
    case 'experience':
      content = (<Experience />);
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
        <h2 className="left-menu-header">Jill Wang</h2>
        <div className="hline" />
        <div className="left-menu-list-container">
          <div className="left-menu-list">
            <LeftMenuItem current={current}>About</LeftMenuItem>
            <LeftMenuItem current={current}>Education</LeftMenuItem>
            <LeftMenuItem current={current}>Experience</LeftMenuItem>
            <LeftMenuItem current={current}>Skills</LeftMenuItem>
            <LeftMenuItem current={current}>Recommendations</LeftMenuItem>
            <LeftMenuItem current={current}>Projects</LeftMenuItem>
            <LeftMenuItem current={current}>Volunteering</LeftMenuItem>
            <LeftMenuItem current={current}>Awards</LeftMenuItem>
            <LeftMenuItem current={current}>Resume</LeftMenuItem>
          </div>
        </div>
        <Icons />
        <p className="left-menu-footer"> &copy; 2021 Jill Yu Chieh Wang</p>
      </div>
      <div className="content-main">
        <div className="frame">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Content;
