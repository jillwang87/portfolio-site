import React from 'react';

const CardHeader = ({ className, src, alt, label }) => (
  <div className={className}>
    { src && <img src={src} alt={alt} /> }
    { label && <p>{label}</p> }
  </div>
);

export default CardHeader;
