import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

function Card ({ head, bottom, children, makeFlip = false }) {
  return (
    <div className="card">
      <Flippy
        flipOnHover={ makeFlip }
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