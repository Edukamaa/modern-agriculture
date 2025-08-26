import React from 'react';
import './Button.css';

const Button = ({ text, type = 'primary', onClick }) => {
  return (
    <button className={`btn btn-${type}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
