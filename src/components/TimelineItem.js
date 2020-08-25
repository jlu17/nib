import React from 'react';
import '../css/button.scss';
import Button from './Button';
import ZoomIcon from '../img/apply/zoom.png';

function TimelineItem(props) {
    var descriptionStyling = props.description === "Invite Only" 
    ? <em>{props.description}</em> 
    : props.description;

    return (
        <li>
            <div className="content">
                <p className="posted-date">{props.date}</p>
                <div className="timeline-heading">
                    <h4>{props.title}</h4>
                    {
                        props.link && 
                        <p className="notAvailable">Zoom link not available yet</p>
                    }
                </div>
                <p>{descriptionStyling}</p>
                {
                    props.buttonTitle &&
                    <Button 
                        buttonText={props.buttonTitle}
                        link={props.buttonLink}
                        external
                    />
                }
            </div>
        </li>
    );

}

export default TimelineItem;

/**
 * <a href={props.link}>
        <div className="zoomLink">
            <img src={ZoomIcon} alt="Zoom link icon" />
            <p>Zoom link</p>
        </div>
    </a>
 */