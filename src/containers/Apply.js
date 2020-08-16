import React from 'react';
import Button from '../components/Button';
import '../css/Apply.scss';
import TimelineItem from '../components/TimelineItem';
import Timeline from '../data/Timeline';
import prepareTypeInfo from '../data/prepareText';
import ProjectType from '../components/ProjectType';

import blob1 from '../img/apply/shapes/photo1.png';
import blob2 from '../img/apply/shapes/photo2.png';


class Apply extends React.Component {
    render() {
        document.title = 'Apply to NIB';
        let timelineInfo = Timeline.map((timelineItem) => {
            return <TimelineItem 
                date={timelineItem.date}
                title={timelineItem.title}
                description={timelineItem.description}
                link={timelineItem.link} 
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
            <section className="hero container">
                <div className="left">
                    <h3>APPLY</h3>
                    <h1>Join our Family</h1>
                    <p>Interested in applying to Net Impact? Click below to fill our our interest form! We'll email you once we open up our Fall 2020 application</p>
                    <Button
                        link="https://airtable.com/shrDaa4bxNXoRB7gQ"
                        buttonText="Interest Form"
                        external
                    />
                </div>
                <div className="right hideOnMobile">
                    <svg className="bigBlob" viewBox="0 0 650 572" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M502.554 212.204C541.576 245.066 628.38 256.67 643.225 281.052C658.284 305.025 600.382 341.773 581.058 406.475C561.127 471.38 579.347 565.055 550.932 563.71C522.517 562.365 449.319 466.203 387.941 449.188C326.957 432.378 277.186 494.918 227.285 513.511C177.384 532.103 124.86 507.768 77.2651 467.309C29.8841 426.442 -12.5676 369.45 11.5662 323.365C35.0923 277.482 125.812 242.302 167.751 190.978C209.509 139.04 202.093 70.7509 226.505 34.6806C250.523 -1.59575 306.762 -5.44739 354.672 6.60652C402.582 18.6604 442.771 46.4181 457.91 86.5371C473.443 126.862 463.713 179.956 502.554 212.204Z" fill="#79ECFF"/>
                    </svg>

                    <img src={blob1} className="hideOnMobile blob1" alt="3 NIB members posing" />
                    <img src={blob2} className="blob2" alt="NIB seniors relaxing on a hill" />
                </div>
            </section>
            <svg className="splashWave hideOnMobile" viewBox="0 0 1440 749" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <svg className="endWave" viewBox="0 0 1440 264" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1440 264V0.0714111H-1C-1 0.0714111 1440 0.0714111 1440 264Z" fill="#F0FCFE"/>
            </svg>

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

            <section className="resourcesSection">
                <svg viewBox="0 0 1440 239" fill="none" xmlns="http://www.w3.org/2000/svg" className="wave">
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
