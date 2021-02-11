import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import useMobileDetect from 'use-mobile-detect-hook';

function Card ({ head, bottom, children, makeFlip = false }) {
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
          style={{ backgroundColor: '#FFFFFF'}}
        >
          { head }
          <div className="hline"
          style={{
            height: '1px',
            backgroundColor: '#808080',
            width: '100%',
            marginBottom: '12px',
            flexShrink: 0,
          }}/>
          { bottom }
        </FrontSide>
        <BackSide
          animationDuration={300}
          style={{ backgroundColor: '#FFFFFF', overflowY: 'auto' }}>
          <div className="back">
            {children}
          </div>
        </BackSide>
      </Flippy>
    </div>

  );
}

export default Card;