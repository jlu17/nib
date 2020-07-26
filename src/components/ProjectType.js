import React from 'react';

function ProjectType(props) {
  return (
    <div className="projectType">
        <div className="leftImage">
            <img src={props.img} alt={props.alt} />
        </div>
        <div className="rightProjectDescription">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    </div>
  );
}

export default ProjectType;
