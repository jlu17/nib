import React from 'react';
import ButtonStyle from '../css/button.css';

function Button(props) {
  return (
      <a href={props.link} class="button">
        {props.buttonText}
      </a>
  );

}

export default Button;
