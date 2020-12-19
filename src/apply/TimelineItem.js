import React from 'react';
import ZoomIcon from './img/zoom.png';
import GCal from './img/gcal.png';

function TimelineItem(props) {
    var descriptionStyling = props.description === "Invite Only" 
    ? <em>{props.description}</em> 
    : props.description;

    var isCCS = props.title === "Case Coaching Session";
    let now = new Date(Date.now());
    let day = now.getDate();
    var isDayOfCCS= day === 3;

    var showZoomLink = (!isCCS || (isCCS && isDayOfCCS));

    var availableLink = showZoomLink && props.link && props.link !== "#";
    var unavailableLink = props.link && props.link === "#";
    var availableButton = props.buttonTitle && props.buttonLink !== "#";

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
                            <img border="0" src={GCal} alt="Google Calendar icon" />
                            <p>Add to Google Calendar</p>
                        </div>
                    </a>
                }
                {
                    props.buttonLink === "#" &&
                    <p className="notAvailable">Sign ups full</p>
                }
                {
                    unavailableLink && 
                    <p className="notAvailable">Sign up link not available (yet!)</p>
                }
            </div>
        </li>
    );

}

export default TimelineItem;