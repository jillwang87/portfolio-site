import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import useMobileDetect from 'use-mobile-detect-hook';

function Card ({ head, bottom, summary, children, makeFlip = false }) {
  const device = useMobileDetect();
  return (
    <div className="card">
      <Flippy
        flipOnHover={ makeFlip && !device.isMobile() }
        flipOnClick={ makeFlip }
        flipDirection="vertically"
        className="experience-card"
      >
        <FrontSide
          animationDuration={300}
          style={{ backgroundColor: '#08150c', border: '1px solid rgba(157, 255, 176, 0.35)' }}
        >
          { head }
          <div className="hline"
          style={{
            height: '1px',
            backgroundColor: 'rgba(157, 255, 176, 0.35)',
            width: '100%',
            marginBottom: '12px',
            flexShrink: 0,
          }}/>
          { bottom }
          { summary && <p className="card-summary">{summary}</p> }
          { makeFlip && device.isMobile() && <span className="card-flip-hint">&#8635; tap to flip</span> }
        </FrontSide>
        <BackSide
          animationDuration={300}
          style={{ backgroundColor: '#08150c', border: '1px solid rgba(157, 255, 176, 0.35)', overflowY: 'auto' }}>
          <div className="back">
            {children}
          </div>
        </BackSide>
      </Flippy>
    </div>

  );
}

export default Card;