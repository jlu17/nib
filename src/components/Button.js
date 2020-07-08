import React from 'react';
import ButtonStyle from '../css/button.css';

const Button = ({ text }) => {
  return (
    <div class="button">
      <a href="/Apply">
        <div>{text}</div>
      </a>
    </div>
  );
}

export default Button;
