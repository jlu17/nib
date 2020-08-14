import React from 'react';
import '../css/button.scss';
import ZoomIcon from '../img/apply/zoom.png';

function TimelineItem(props) {
    return (
        <li class="timeline">
            <div class="posted-date">
                <span class="month">{props.date}</span>
            </div>

            <div class="timeline-panel">
                <div class="timeline-content">
                    <div class="timeline-heading">
                        <h4>{props.title}</h4>
                        <a href={props.link}>
                            <div className="zoomLink">
                                <img src={ZoomIcon} alt="Zoom link icon" />
                                <p>Zoom link</p>
                            </div>
                        </a>
                    </div>

                    <div class="timeline-body">
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </li>
    );

}

export default TimelineItem;

/**
 * 
 * <div>
            <div>{props.date}</div>
            <div>{props.title}</div>
            <div>{props.description}</div>
            
        </div>
 */