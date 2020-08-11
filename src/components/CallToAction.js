import React from 'react';
import Button from './Button';
import '../css/CallToAction.scss';

function CallToAction() {
    const width = window.innerWidth;
    const height = 239;
    const viewBox = [0, 0, width, height];
    return (
        <div>
            <svg width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg" className="wave">
                <path d="M692.426 116.5C486.926 116.5 -2.07446 238.5 -2.07446 238.5H1440.93V0C1440.93 0 1408.43 183.5 1193.93 184.5C979.426 185.5 897.926 116.5 692.426 116.5Z" fill="#F0FCFE"/>
            </svg>
            <div class="callToAction">
                <h1>Ready to Join Us?</h1>
                <Button
                    link="/apply"
                    buttonText="Apply now"
                />
            </div>
        </div>
    );
}

export default CallToAction;
