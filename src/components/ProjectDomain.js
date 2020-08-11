import React from 'react';

function ProjectDomain(props) {
  return (
    <div className="projectDomain">
        <img src={props.img} alt={props.alt} />
        <p>{props.domain}</p>
    </div>
  );
}
 
export default ProjectDomain;
