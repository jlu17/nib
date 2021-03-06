import React from 'react';
import './button.scss';
import { Link } from "react-router-dom";


function Button(props) {
  if(props.external) {
    return ( 
      <a href={props.link} className="button" target="_blank" rel="noopener noreferrer">
          {props.buttonText}
      </a>
    );
  }
  else {
    return (
      <Link to={props.link} className="button">
        {props.buttonText}
      </Link>
  );
  }
}

export default Button;