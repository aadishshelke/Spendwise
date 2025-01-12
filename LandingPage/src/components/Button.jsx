import React from 'react';

const Button = ({ styles }) => (
  <a href="http://localhost:5175/">
    <button
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary1 bg-blue-gradient rounded-[10px] outline-none ${styles}`}
  >
    Get Started
  </button>
  </a>
);

export default Button;
