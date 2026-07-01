import React from 'react';

const CardFooter = ({ className, src, alt, text, subtext }) => (
  <div className={className}>
    { src && <img src={src} alt={alt} /> }
    { text && <p id="text">{text}</p> }
    { subtext && <p id="subtext">{subtext}</p> }
  </div>
);

export default CardFooter;
