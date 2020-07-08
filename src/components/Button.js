import React from 'react';
import ButtonStyle from '../css/button.css';

function Button(props) {
  return (
    <div class="button">
      <a href={props.link} >
        <p>{props.buttonText}</p>
      </a>
    </div>
  );

}

export default Button;
