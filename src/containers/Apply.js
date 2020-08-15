import React from 'react';
import NavBar from '../components/NavBar';
import Button from '../components/Button';
import nibGroup from '../img/nib-group.png';
import '../css/Apply.scss';
import TimelineItem from '../components/TimelineItem';
import Timeline from '../data/Timeline';
import prepareTypeInfo from '../data/prepareText';
import ProjectType from '../components/ProjectType';



class Apply extends React.Component {
    render() {
        document.title = 'Apply to NIB';
        let timelineInfo = Timeline.map((timelineItem) => {
            return <TimelineItem 
                date={timelineItem.date}
                title={timelineItem.title}
                description={timelineItem.description}
                link={timelineItem.link} 
                />
        });
        let preparationTypes = prepareTypeInfo.map((project) => {
            return <ProjectType 
                img={project.img}
                alt={project.alt}
                title={project.title}
                description={project.description}
            />
        })

        return (
        <section className="applyPage">
            <section className="hero container">
            <div className="left">
                <h3>APPLY</h3>
                <h1>Apply to Net Impact</h1>
                <p>Put your email down to be notified when we open up applications</p>
                <Button
                link="/Apply"
                buttonText="Apply Here"
                />
            </div>
            <div className="right">
                <img src= {nibGroup} alt="Group of NIB members gathered together" />
            </div>
            </section>
            <svg className="splashWave hideOnMobile" width={window.innerWidth} viewBox="0 0 1440 749" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M713.744 408.887C546.069 469.017 -2 454 -2 454V748.5H1440V0C1282.84 210.195 1071.62 83.1369 975.016 157.385C878.415 231.633 881.418 348.757 713.744 408.887Z" fill="#F0FCFE"/>
            </svg>
            <section className="preparationSection">
                <section className="container">
                    <h1>How should I prepare?</h1>
                    <div className="flex projectTypes">
                        {preparationTypes}
                    </div>
                </section>
            </section>
            <svg className="endWave"width={window.innerWidth} viewBox="0 0 1440 264" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1440 264V0.0714111H-1C-1 0.0714111 1440 0.0714111 1440 264Z" fill="#F0FCFE"/>
            </svg>

            <section class="container timelineSection">
                <h1>Timeline</h1>
                <div class="timelinePhotos">
                    <img src={require("../img/apply/timelinePhotos/photo1.jpg")} alt="" />
                    <img src={require("../img/apply/timelinePhotos/photo2.jpg")} alt="" />
                    <img src={require("../img/apply/timelinePhotos/photo3.jpg")} alt="" />
                    <img src={require("../img/apply/timelinePhotos/photo4.jpg")} alt="" />
                </div>
                <div class="timelineContainer">
                    <ul class="timeline">
                        {timelineInfo}
                    </ul>
                </div>
            </section>

            <section class="resourcesSection">
                <svg width={window.innerWidth} viewBox="0 0 1440 239" fill="none" xmlns="http://www.w3.org/2000/svg" className="wave">
                    <path d="M692.426 116.5C486.926 116.5 -2.07446 238.5 -2.07446 238.5H1440.93V0C1440.93 0 1408.43 183.5 1193.93 184.5C979.426 185.5 897.926 116.5 692.426 116.5Z" fill="#F0FCFE"/>
                </svg>
                <div className="resources">
                    <div>
                        <h2>Have More Questions?</h2>
                        <Button
                            link="/faq"
                            buttonText="FAQs"
                        />
                    </div>
                    <div>
                        <h2>Recruiting Resources</h2>
                        <Button
                            link="/apply"
                            buttonText="Apply now"
                        />
                    </div>
                </div>
            </section>
        </section>
        );
    }
}

export default Apply;
