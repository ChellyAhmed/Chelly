import React from 'react';
import '../styles/dist/button.css'; // import the CSS file for styling

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
