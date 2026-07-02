import React, { useEffect, useRef, useState } from 'react';
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
import Awards from './Awards';
import Resume from './Resume';
import Volunteering from './Volunteering';
import Projects from './Projects';

const rightCaret = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z"
      fill="currentColor"
    />
  </svg>
);

const LeftMenuItem = ({ onClick, children, current }) => {
  const isActive = current === children.toLowerCase();
  return (
    <Link
      className={classNames('left-menu-item', isActive && 'active')}
      to={`/content/${children.toLowerCase()}`}
      replace
      onClick={onClick}
    >
      <p>{children}</p>
      { isActive && rightCaret }
    </Link>
  );
};

const Content = () => {
  const lastContent = useRef('about');
  const onContentPage = useRouteMatch('/content/:current');
  const { current } = onContentPage?.params || { current: lastContent.current };
  lastContent.current = current;
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const [bootKey, setBootKey] = useState(0);
  const wasOnContentPage = useRef(false);
  useEffect(() => {
    if (onContentPage && !wasOnContentPage.current) {
      setBootKey((key) => key + 1);
    }
    wasOnContentPage.current = !!onContentPage;
  }, [onContentPage]);

  const tabScrollRef = useRef(null);
  const [tabScroll, setTabScroll] = useState({ atStart: true, atEnd: true });
  const checkTabScroll = () => {
    const el = tabScrollRef.current;
    if (!el) return;
    setTabScroll({
      atStart: el.scrollLeft <= 2,
      atEnd: el.scrollLeft + el.clientWidth >= el.scrollWidth - 2,
    });
  };
  useEffect(() => {
    const el = tabScrollRef.current;
    if (!el) return;
    checkTabScroll();
    const nudgeTimeout = setTimeout(() => {
      if (el.scrollWidth <= el.clientWidth + 2) return;
      el.scrollTo({ left: 36, behavior: 'smooth' });
      setTimeout(() => el.scrollTo({ left: 0, behavior: 'smooth' }), 450);
    }, 700);
    window.addEventListener('resize', checkTabScroll);
    return () => {
      clearTimeout(nudgeTimeout);
      window.removeEventListener('resize', checkTabScroll);
    };
  }, [bootKey]);
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
      content = (<Projects />);
      break;
    case 'volunteering':
      content = (<Volunteering />);
      break;
    case 'awards':
      content = (<Awards />);
      break;
    case 'resume':
      content = (<Resume />);
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
      <div className="crt-screen">
        <div key={bootKey} className="crt-boot-scan">
          <div className="scan-band band-1" />
          <div className="scan-band band-2" />
          <div className="scan-band band-3" />
          <div className="scan-band band-4" />
          <div className="scan-band band-5" />
        </div>
        <div key={`menu-${bootKey}`} className={classNames('left-menu', 'screen-load-in', menuOpen && 'open')}>
          <div className="left-menu-brand">
            <h2 className="left-menu-header">Jill Wang</h2>
            <p className="left-menu-tagline">Pip-Boy 3000 Mk IV — property of sole registered owner. Unauthorized use voids Vault-Tec warranty.</p>
          </div>
          <div className="hline" />
          <div className="tab-scroll-wrap">
            <div className="left-menu-list-container" ref={tabScrollRef} onScroll={checkTabScroll}>
              <div className="left-menu-list">
                <LeftMenuItem current={current} onClick={closeMenu}>About</LeftMenuItem>
                <LeftMenuItem current={current} onClick={closeMenu}>Experience</LeftMenuItem>
                <LeftMenuItem current={current} onClick={closeMenu}>Skills</LeftMenuItem>
                <LeftMenuItem current={current} onClick={closeMenu}>Education</LeftMenuItem>
                <LeftMenuItem current={current} onClick={closeMenu}>Resume</LeftMenuItem>
                <LeftMenuItem current={current} onClick={closeMenu}>Recommendations</LeftMenuItem>
                <LeftMenuItem current={current} onClick={closeMenu}>Projects</LeftMenuItem>
                <LeftMenuItem current={current} onClick={closeMenu}>Volunteering</LeftMenuItem>
                <LeftMenuItem current={current} onClick={closeMenu}>Awards</LeftMenuItem>
              </div>
            </div>
            <span className={classNames('scroll-hint', 'scroll-hint-left', tabScroll.atStart && 'hidden')} aria-hidden="true">&lsaquo;</span>
            <span className={classNames('scroll-hint', 'scroll-hint-right', tabScroll.atEnd && 'hidden')} aria-hidden="true">&rsaquo;</span>
          </div>
        </div>
        <div key={`main-${bootKey}`} className={classNames('content-main', 'screen-load-in', current === 'resume' && 'no-overlay')}>
          <div className="frame">
            {content}
          </div>
        </div>
        <div key={`status-${bootKey}`} className="status-bar screen-load-in">
          <Icons />
          <p className="left-menu-footer"> &copy; 2026 Jill Yu Chieh Wang</p>
        </div>
      </div>
    </div>
  );
};

export default Content;
