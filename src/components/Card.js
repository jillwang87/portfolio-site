import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

function Card ({ head, bottom, children, makeFlip }) {
  return (
    <div className="card">
      <Flippy
        flipOnHover={ makeFlip }
        flipOnClick={ makeFlip }
        flipDirection="vertically"
        style={{
          paddingTop: '20px',
          width: '40vh',
          height: '55vh'
        }}
      >
        <FrontSide
          animationDuration={300}
          style={{ backgroundColor: '#FFFFFF'}}
        >
          { head }
          <svg id="line" width="100%" height="24" viewBox="0 0 300 24">
            <path d="M 0 0 H 300" stroke="#606060"/>
          </svg>
          { bottom }
        </FrontSide>
        <BackSide
          animationDuration={300}
          style={{ backgroundColor: '#FFFFFF'}}>
          <div className="back">
            {children}
          </div>
        </BackSide>
      </Flippy>
    </div>

  );
}

export default Card;