import React from 'react';
import Button from './Button';
import '../css/CallToAction.scss';

function ClientImage(props) {
    return (
        <a href={props.link} target = "_blank"> 
            <img src={props.img} alt="" />
        </a>
    );
}

export default ClientImage;
