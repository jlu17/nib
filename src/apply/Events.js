import React from 'react';
import Button from '../components/button';
import '../css/Apply.scss';
import TimelineItem from '../components/TimelineItem';
import Timeline from '../data/Timeline';
import prepareTypeInfo from '../data/prepareText';
import ProjectType from '../components/ProjectType';

import blob1 from '../img/apply/shapes/photo1.png';
import blob2 from '../img/apply/shapes/photo2.png';
import zoom from '../img/apply/zoom.png';


class Apply extends React.Component {
    virtualTablingLink = "https://berkeley.zoom.us/j/91291610391";

    constructor(props) {
        super(props);
        this.state = ({
            exitedBanner: false,
        });
    }

    getComponent = () => {
        let now = new Date(Date.now());

        let hour = now.getHours();
        let day = now.getDate();
        if (day >= 26 && day <= 29) {
            if (hour >= 10 && hour <= 15) {
                return (
                    <div className={this.state.exitedBanner?'fadeOut zoomBannerContainer hideOnMobile':'fadeIn zoomBannerContainer hideOnMobile'}>
                        <div className="zoomBanner">
                            <a href={this.virtualTablingLink} target="_blank" rel="noopener noreferrer"><img src={zoom} alt="Zoom icon" /></a>
                            <p>2 members of NIB are on this Zoom call from Wednesday to Friday, 10am-6pm PST. 
                            Click the Zoom icon to join now and chat with our members!</p>
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
        let timelineInfo = Timeline.map((timelineItem) => {
            return <TimelineItem
                date={timelineItem.date}
                title={timelineItem.title}
                description={timelineItem.description}
                link={timelineItem.link}
                buttonTitle={timelineItem.buttonTitle}
                buttonLink={timelineItem.buttonLink}
                key={timelineItem.title}
                />
        });

        let preparationTypes = prepareTypeInfo.map((project) => {
            return <ProjectType
                img={project.img}
                alt={project.alt}
                title={project.title}
                description={project.description}
                key={project.title}
            />
        })

        return (
        <section className="applyPage">
            {this.getComponent()}
            <section className="container timelineSection">
                <h1>Timeline</h1>
                <div className="timelinePhotos">
                    <img src={require("../img/apply/timelinePhotos/photo1.jpg")} alt="" />
                    <img src={require("../img/apply/timelinePhotos/photo2.jpg")} alt="" />
                    <img src={require("../img/apply/timelinePhotos/photo3.jpg")} alt="" />
                    <img src={require("../img/apply/timelinePhotos/photo4.jpg")} alt="" />
                    <img src={require("../img/apply/timelinePhotos/photo5.jpg")} alt="" />
                    <img src={require("../img/apply/timelinePhotos/photo6.jpg")} alt="" />
                </div>
                <div className="timelineContainer">
                    <ul className="timeline">
                        {timelineInfo}
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
                            link="https://airtable.com/shrDaa4bxNXoRB7gQ"
                            buttonText="Interest Form"
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
