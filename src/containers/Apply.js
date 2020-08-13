import React from 'react';
import NavBar from '../components/NavBar';
import Button from '../components/Button';
import nibGroup from '../img/nib-group.png';
import '../css/Apply.scss';
import TimelineItem from '../components/TimelineItem';
import Timeline from '../data/Timeline';

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
            <section class="container">
            <h1>How should I prepare?</h1>
            </section>
            <section class="container">
                <h1>Timeline</h1>
                <div class="timelineContainer">
                    <ul class="timeline">
                        {timelineInfo}
                    </ul>
                </div>
            </section>
        </section>
        );
    }
}

export default Apply;
