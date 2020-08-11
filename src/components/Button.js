import React from 'react';
import '../css/button.scss';

function Button(props) {
  return (
      <a href={props.link} className="button">
        {props.buttonText}
      </a>
  );

}

export default Button;
