import React from 'react';
import '../css/button.scss';
import Button from './Button';
import ZoomIcon from '../img/apply/zoom.png';
import GCal from '../img/apply/gcal.png';
import Youtube from '../img/apply/youtube.png';

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

    return (
        <li>
            <div className="content">
                <p className="posted-date">{props.date}</p>
                <div className="timeline-heading">
                    <h4>{props.title}</h4>
                </div>
                <p>{descriptionStyling}</p>
                {
                    props.buttonTitle &&
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
                    props.youtubeLink &&
                    <a target="_blank" rel="noopener noreferrer" href={props.youtubeLink}>
                        <div className="zoomLink">
                            <img border="0" src={Youtube} />
                            <p>Recording</p>
                        </div>
                    </a>
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