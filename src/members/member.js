import React from 'react';
import './member.scss';
import linkedInImage from '../img/linkedin.png';

function Member(props) {
  if (props.exec) {
    return (
      <div className="memberProfile execProfile">
        <img src={props.image} className="memberImage" alt={props.name} />
        <img src={props.sillyImage} className="memberSillyImage" alt={props.name} />
        <div className="name">
          <h4>{props.name}</h4>
          <p>{props.title}</p>
          <p><a href={props.linkedin} target="_blank" rel="noopener noreferrer"><img src={linkedInImage} className="icon" alt="LinkedIn icon" /></a></p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="memberProfile">
        <img src={props.image} className="memberImage" alt={props.name} />
        <img src={props.sillyImage} className="memberSillyImage" alt={props.name} />
        <div className="name">
          <h4>{props.name}</h4>
          <p>{props.title}</p>
          <p><a href={props.linkedin} target="_blank" rel="noopener noreferrer"><img src={linkedInImage} className="icon" alt="LinkedIn icon" /></a></p>
        </div>
      </div>
    );
  }
}

export default Member;
