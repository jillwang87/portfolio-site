import React, { useRef, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import classNames from 'classnames';
import Icons from './components/Icons';
import About from './About'
import Education from './Education';
import Experience from './Experience';
import closeIcon from './images/close.png'
import './Content.scss';
import Skills from './Skills';
import Recommendations from './Recommendations';

const rightCaret = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z"
      fill="currentColor"
    />
  </svg>
);

const LeftMenuItem = ({ onClick, children, current }) => (
  <Link className="left-menu-item" to={`/content/${children.toLowerCase()}`} replace onClick={onClick}>
    { current === children.toLowerCase() && rightCaret }
    <p>{children}</p>
  </Link>
);

const Content = () => {
  const lastContent = useRef('about');
  const onContentPage = useRouteMatch('/content/:current');
  const { current } = onContentPage?.params || { current: lastContent.current };
  lastContent.current = current;
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
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
      content = (<Skills />);
      break;
    case 'recommendations':
      content = (<Recommendations />);
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
      { !!onContentPage && (
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
          { menuOpen ?
            (
              <div className="close" style={{ fontSize: '30px'}}>
                <svg width='40' height='40' viewBox="0 0 40 40">
                  <path className="close-icon" d="M 10,10 L 30,30 M 30,10 L 10,30" />
                </svg>
              </div>
            ) : (
              <div>
                <div className="menu-button-hline" />
                <div className="menu-button-hline" />
                <div className="menu-button-hline" />
              </div>
            )
          }
        </button>
      )}
      <div className={classNames('overlay', menuOpen && 'visible')} onClick={closeMenu} />
      <div className={classNames('left-menu', menuOpen && 'open')}>
        <h2 className="left-menu-header">Jill Wang</h2>
        <div className="hline" />
        <div className="left-menu-list-container">
          <div className="left-menu-list">
            <LeftMenuItem current={current} onClick={closeMenu}>About</LeftMenuItem>
            <LeftMenuItem current={current} onClick={closeMenu}>Education</LeftMenuItem>
            <LeftMenuItem current={current} onClick={closeMenu}>Experience</LeftMenuItem>
            <LeftMenuItem current={current} onClick={closeMenu}>Skills</LeftMenuItem>
            <LeftMenuItem current={current} onClick={closeMenu}>Recommendations</LeftMenuItem>
            <LeftMenuItem current={current} onClick={closeMenu}>Projects</LeftMenuItem>
            <LeftMenuItem current={current} onClick={closeMenu}>Volunteering</LeftMenuItem>
            <LeftMenuItem current={current} onClick={closeMenu}>Awards</LeftMenuItem>
            <LeftMenuItem current={current} onClick={closeMenu}>Resume</LeftMenuItem>
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
