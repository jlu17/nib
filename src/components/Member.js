import React from 'react';
import '../css/Member.scss';
import linkedInImage from '../img/social/linkedin.png';

function Member(props) {
  return (
    <div className="memberProfile">
      <img src={props.image} className="memberImage" />
      <img src={props.sillyImage} className="memberSillyImage" />
      <div className="name">
        <h4>{props.name}</h4>
        <p>{props.title}</p>
        <p><a href={props.linkedin} target="_blank"><img src={linkedInImage} className="icon"></img></a></p>
      </div>
    </div>
  );
}

export default Member;
