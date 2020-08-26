import React from 'react';
import '../css/button.scss';
import Button from './Button';
import ZoomIcon from '../img/apply/zoom.png';
import GCal from '../img/apply/gcal.png';

function TimelineItem(props) {
    var descriptionStyling = props.description === "Invite Only" 
    ? <em>{props.description}</em> 
    : props.description;

    var availableLink = props.link && props.link != "#";
    var unavailableLink = props.link && props.link === "#";

    return (
        <li>
            <div className="content">
                <p className="posted-date">{props.date}</p>
                <div className="timeline-heading">
                    <h4>{props.title}</h4>
                    {
                        unavailableLink && 
                        <p className="notAvailable">Zoom link not available yet</p>
                    }
                </div>
                <p>{descriptionStyling}</p>
                {
                    props.buttonTitle &&
                    <a target="_blank" href={props.buttonLink}>
                        <div className="zoomLink">
                            <img src={props.buttonIcon} alt="Zoom link icon" />
                            <p>{props.buttonTitle}</p>
                        </div>
                    </a>
                }
                {
                    availableLink &&
                    <a target="_blank" href={props.link}>
                        <div className="zoomLink">
                            <img src={ZoomIcon} alt="Zoom link icon" />
                            <p>Zoom link</p>
                        </div>
                    </a>
                }
                {
                    props.gCalLink &&
                    <a target="_blank" href={props.gCalLink}>
                        <div className="zoomLink">
                            <img border="0" src={GCal} />
                            <p>Add to Google Calendar</p>
                        </div>
                    </a>
                }
            </div>
        </li>
    );

}

export default TimelineItem;