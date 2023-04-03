import React from 'react';
import '../styles/dist/button.css'; // import the CSS file for styling

const Button = ({ text }) => {
  return (
    <button className="button">
      {text}
    </button>
  );
};

export default Button;
