import React from 'react';

export default function CultureImage(props) {
    return (
        <div className="col">
            <img src={props.img} className="lifeInNibPics" height= "280" alt={props.alt} />
            <p>{props.description}</p>
        </div>
    );
}