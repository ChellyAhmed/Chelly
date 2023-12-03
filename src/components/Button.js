import React from 'react';

const Button = ({ text, clicked }) => {
  return (
    <button className="button"
      onClick={clicked}
    >
      {text}
    </button>
  );
};

export default Button;
