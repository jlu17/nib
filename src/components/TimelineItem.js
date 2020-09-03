import React from 'react';
import '../css/button.scss';
import Button from './Button';
import ZoomIcon from '../img/apply/zoom.png';
import GCal from '../img/apply/gcal.png';

function TimelineItem(props) {
    var descriptionStyling = props.description === "Invite Only" 
    ? <em>{props.description}</em> 
    : props.description;

    var isCCS = props.title === "Case Coaching Session";
    let now = new Date(Date.now());
    let day = now.getDate();
    var isDayOfCCS= day === 3;

    var showZoomLink = (!isCCS || (isCCS && isDayOfCCS));

    var availableLink = showZoomLink && props.link && props.link != "#";
    var unavailableLink = props.link && props.link === "#";
    var availableButton = props.buttonTitle && props.buttonLink != "#";

    return (
        <li>
            <div className="content">
                <p className="posted-date">{props.date}</p>
                <div className="timeline-heading">
                    <h4>{props.title}</h4>
                </div>
                <p>{descriptionStyling}</p>
                {
                    availableButton &&
                    <a target="_blank" rel="noopener noreferrer" href={props.buttonLink}>
                        <div className="zoomLink">
                            <img src={props.buttonIcon} alt="Zoom link icon" />
                            <p>{props.buttonTitle}</p>
                        </div>
                    </a>
                }
                {
                    availableLink &&
                    <a target="_blank" rel="noopener noreferrer" href={props.link}>
                        <div className="zoomLink">
                            <img src={ZoomIcon} alt="Zoom link icon" />
                            <p>Zoom link</p>
                        </div>
                    </a>
                }
                {
                    props.gCalLink &&
                    <a target="_blank" rel="noopener noreferrer" href={props.gCalLink}>
                        <div className="zoomLink">
                            <img border="0" src={GCal} />
                            <p>Add to Google Calendar</p>
                        </div>
                    </a>
                }
                {
                    props.buttonLink === "#" &&
                    <p className="notAvailable">Sign ups filled</p>
                }
                {
                    unavailableLink && 
                    <p className="notAvailable">Zoom event finished</p>
                }
            </div>
        </li>
    );

}

export default TimelineItem;