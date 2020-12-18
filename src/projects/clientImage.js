import React from 'react';

function ClientImage(props) {
    return (
        <a href={props.link} target = "_blank"> 
            <img src={props.img} alt="" />
        </a>
    );
}

export default ClientImage;
