import React from 'react';
import '../css/button.scss';
import { Link } from "react-router-dom";


function Button(props) {
  if(props.external) {
    return ( 
      <a href={props.link} className="button" target="_blank">
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
