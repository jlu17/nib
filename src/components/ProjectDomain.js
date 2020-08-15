import React from 'react';

function ProjectDomain(props) {
  return (
    <div className={`projectDomain ${props.extendedClass ? props.extendedClass : ""}`}>
        <img src={props.image} />
        <p>{props.name}</p>
    </div>
  );
}

export default ProjectDomain;
