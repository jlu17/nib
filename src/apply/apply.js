import React from 'react';
import Button from '../components/button';
import './apply.scss';
import TimelineItem from './TimelineItem';
import Timeline from './data/timeline';
import prepareTypeInfo from './data/prepareText';
import ProjectType from '../components/ProjectType';

import blob1 from './img/shapes/photo1.png';
import blob2 from './img/shapes/photo2.png';
import zoom from './img/zoom.png';

// import chat from './img/atAGlance/chat.png';
// import doc from './img/atAGlance/doc.png';
// import network from './img/atAGlance/network.png';
// import {ReactComponent as Arrow} from './img/atAGlance/arrow.svg';
// import {ReactComponent as DownArrow} from './img/atAGlance/down.svg';


class Apply extends React.Component {
    virtualTablingLink = "https://berkeley.zoom.us/j/91291610391";
    coffeeChatSignUp = "https://airtable.com/shrAXBVJn9KMHPoIZ";
    interestForm = "https://airtable.com/shrDaa4bxNXoRB7gQ";
    application = "https://airtable.com/shrhW4PzvxhFM6zEi";
    caseCoachingSignUp = "https://berkeley.zoom.us/meeting/register/tJEqdOuvpzIrGtPHKIafEcR3V7zKkNE9LZzz";
    infosession1 = "https://berkeley.zoom.us/j/94684234345?pwd=QjUwd1cyV3o2TUppbk44a2FTRlEwUT09";
    infosession2 = "https://berkeley.zoom.us/j/93246084610?pwd=QTQ1WjJCTjdoU3RkYnFrNndCaUgzUT09";
    caseCoachingSession = "https://berkeley.zoom.us/j/95732799107?pwd=UThjWUE2R1pHZkZyd2VqbEtobTd6QT09";

    constructor(props) {
        super(props);
        this.state = ({
            exitedBanner: false,
        });
    }

    getComponent = () => {
        let options = [
            {
                title: "Our 1st infosession is happening right now - click the Zoom icon to join now learn more about our club!",
                link: this.infosession1
            },
            {
                title: "Our 2nd infosession + case workshop is happening right now - click the Zoom icon to learn about our club and how to case!",
                link: this.infosession2
            },
            {
                title: "Our case coaching session is happening right now - click the Zoom icon to join now and learn how to case!",
                link: this.caseCoachingSession
            }
        ];

        let now = new Date(Date.now());

        let hour = now.getHours();
        let day = now.getDate();
        if (day >= 1 && day <= 3) {
            if (hour >= 20 && hour <= 21) {
                var item = options[day - 1];
                return (
                    <div className={this.state.exitedBanner?'fadeOut zoomBannerContainer hideOnMobile':'fadeIn zoomBannerContainer hideOnMobile'}>
                        <div className="zoomBanner">
                            <a href={item.link} target="_blank" rel="noopener noreferrer"><img src={zoom} alt="Zoom icon" /></a>
                            <p>{item.title}</p>
                            <svg className="exit" onClick={this.exitBanner} width="20" viewBox="0 0 194 194" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="129.527" y="33.3604" width="43" height="136" transform="rotate(45 129.527 33.3604)" fill="#1C68B2"/>
                                <rect x="33.3604" y="64.4731" width="43" height="136" transform="rotate(-45 33.3604 64.4731)" fill="#1C68B2"/>
                            </svg>
                        </div>
                    </div>
                );
            }
        }
    }

    exitBanner = () => {
        this.setState({
            exitedBanner: true
        });
    }

    render() {
        document.title = 'NIB | Apply';

        return (
        <section className="applyPage">
            {this.getComponent()}
            <section className="hero">
                <div class="container">
                    <div className="left">
                        <h3>APPLY</h3>
                        <h1>Join our Family</h1>
                        <p>Interested in applying to Net Impact? Fill out our interest form to be notified on events coming up!</p>
                        <Button
                            link={this.interestForm}
                            buttonText="Interest Form"
                            external
                        />
                        {/* <Button
                            link={this.application}
                            buttonText="Application"
                            external
                        /> */}
                    </div>
                </div>
                <div className="right hideOnMobile">
                    <svg className="bigBlob" viewBox="0 0 550 572" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M502.554 212.204C541.576 245.066 628.38 256.67 643.225 281.052C658.284 305.025 600.382 341.773 581.058 406.475C561.127 471.38 579.347 565.055 550.932 563.71C522.517 562.365 449.319 466.203 387.941 449.188C326.957 432.378 277.186 494.918 227.285 513.511C177.384 532.103 124.86 507.768 77.2651 467.309C29.8841 426.442 -12.5676 369.45 11.5662 323.365C35.0923 277.482 125.812 242.302 167.751 190.978C209.509 139.04 202.093 70.7509 226.505 34.6806C250.523 -1.59575 306.762 -5.44739 354.672 6.60652C402.582 18.6604 442.771 46.4181 457.91 86.5371C473.443 126.862 463.713 179.956 502.554 212.204Z" fill="#91e9ff"/>
                    </svg>

                    <img src={blob1} className="hideOnMobile blob1" alt="3 NIB members posing" />
                    <img src={blob2} className="blob2" alt="NIB seniors relaxing on a hill" />
                </div>
            </section>
            <svg className="splashWave hideOnMobile" viewBox="0 0 1440 749" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M713.744 408.887C546.069 469.017 -2 454 -2 454V748.5H1440V0C1282.84 210.195 1071.62 83.1369 975.016 157.385C878.415 231.633 881.418 348.757 713.744 408.887Z" fill="#F0FCFE"/>
            </svg>
            <section className="preparationSection">
                {/* <section className="container atAGlance hideOnMobile">
                    <h1>Timeline at a Glance</h1>
                    <a href="/apply#timelineSection">
                        <p>Full timeline below <DownArrow /></p>
                    </a>
                    <div className="flex">
                        <Arrow />
                        <div className="item">
                            <img src={chat} alt="chat icon" />
                            <h4>Virtual Tabling</h4>
                            <p>Wednesday, August 26 - Thursday, September 3</p>
                            <ul>
                                <li>From August 26-29 anytime 10am-6pm, come say hi on Zoom!</li>
                                <li>(Note: sign ups filled!) Sign up for a 1:1 with a NIB member sometime August 31-September 3.</li>
                            </ul>
                        </div>
                        <div className="item">
                            <img src={network} alt="chat icon" />
                            <h4>Infosessions</h4>
                            <p>Tuesday, September 1 - Thursday, September 3</p>
                            <ul>
                                <li>Tuesday: Infosession #1</li>
                                <li>Wednesday: Infosession #2 + Case Workshop</li>
                                <li>Thursday: Case coaching session</li>
                            </ul>
                        </div>
                        <div className="item">
                            <img src={doc} alt="chat icon" />
                            <h4>Applications and Interviews</h4>
                            <p>Friday, September 4 - Thursday, September 10</p>
                            <ul>
                                <li>Apps are due at NOON on September 4. Apply <a className="underline-magical" href="https://airtable.com/shrhW4PzvxhFM6zEi" target="_blank" rel="noopener noreferrer"> here. </a></li>
                                <li>Check out our interview FAQ and tips <a className="underline-magical" href="/nib-app-checklist.pdf" target="_blank" rel="noopener noreferrer"> here! </a></li>
                            </ul>
                        </div>
                    </div>
                </section> */}
                <section className="container">
                    <h1>How Should I Prepare?</h1>
                    <div className="flex projectTypes">
                        {prepareTypeInfo.map((project) => {
                            return <ProjectType {...project} />;
                        })}
                    </div>
                    <div class="resources">
                        <Button
                            link="/nib-app-checklist.pdf"
                            buttonText="Recruiting Tips"
                            external
                        />
                        <Button
                            link="/sample-case.pdf"
                            buttonText="Sample 1st Round Case"
                            external
                        />
                    </div>
                </section>
            </section>
            <svg className="endWave" viewBox="0 0 1440 264" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1440 264V0.0714111H-1C-1 0.0714111 1440 0.0714111 1440 264Z" fill="#F0FCFE"/>
            </svg>

            <section className="container timelineSection" id="timelineSection">
                <h1>Timeline</h1>
                <div className="timelinePhotos">
                    <img src={require("./img/timelinePhotos/photo1.jpg")} alt="" />
                    <img src={require("./img/timelinePhotos/photo2.jpg")} alt="" />
                    <img src={require("./img/timelinePhotos/photo3.jpg")} alt="" />
                    <img src={require("./img/timelinePhotos/photo4.jpg")} alt="" />
                    <img src={require("./img/timelinePhotos/photo5.jpg")} alt="" />
                    <img src={require("./img/timelinePhotos/photo6.jpg")} alt="" />
                    <img src={require("./img/timelinePhotos/photo9.png")} alt="" />
                    <img src={require("./img/timelinePhotos/photo8.png")} alt="" />
                </div>
                <div className="timelineContainer">
                    <ul className="timeline">
                        {Timeline.map((timelineItem) => {
                            return <TimelineItem {...timelineItem} />;
                        })}
                    </ul>
                </div>
            </section>

            <section>
                <svg viewBox="0 0 1440 239" fill="none" xmlns="http://www.w3.org/2000/svg" className="wave">
                    <path d="M692.426 116.5C486.926 116.5 -2.07446 238.5 -2.07446 238.5H1440.93V0C1440.93 0 1408.43 183.5 1193.93 184.5C979.426 185.5 897.926 116.5 692.426 116.5Z" fill="#F0FCFE"/>
                </svg>
                <div className="callToAction">
                    <div>
                        <h1>Ready to Join?</h1>
                        <Button
                            link="https://airtable.com/shrhW4PzvxhFM6zEi"
                            buttonText="Application"
                            external
                        />
                    </div>
                </div>
            </section>
        </section>
        );
    }
}

export default Apply;