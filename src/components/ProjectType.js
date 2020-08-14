import React from 'react';

function ProjectType(props) {
  return (
    <div className="projectType">
        <div className="leftImage">
            <img src={props.img} alt={props.alt} />
        </div>
        <div className="rightProjectDescription">
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        </div>
    </div>
  );
}

export default ProjectType;
