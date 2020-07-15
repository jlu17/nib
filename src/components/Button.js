import React from 'react';
import ButtonStyle from '../css/button.scss';

function Button(props) {
  return (
      <a href={props.link} class="button">
        {props.buttonText}
      </a>
  );

}

export default Button;
