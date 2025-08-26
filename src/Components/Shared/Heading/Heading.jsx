import React from 'react';
import './Heading.css';

const Heading = ({ text, size = 'primary' }) => {
  return <h1 className={`heading-${size}`}>{text}</h1>;
};

export default Heading;
