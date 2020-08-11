import React from 'react';
import NavBar from '../components/NavBar';
import '../css/Projects.scss';
import CallToAction from '../components/CallToAction';
import projectTypeInfo from '../data/ProjectTypesText';
import ProjectType from '../components/ProjectType';

class Projects extends React.Component {
    render() {
        let projectTypes = projectTypeInfo.map((project) => {
            return <ProjectType 
                img={project.img}
                alt={project.alt}
                title={project.title}
                description={project.description}
            />
        })
        

        document.title = 'Projects of NIB';
        return (
        <section className="projectsPage">
            <NavBar />
            <section className="hero container">
                <div id="left">
                    <h3>PROJECTS</h3>
                    <h1>We Make Our Impact Through Dedicated Client Work</h1>
                    <p>Each semester we work alongside companies, non-profits and start-ups on a socially/environmentally driven problem. <br />
                    <br />
                    Defining the work space, conducting client research, and analyzing data are just a part of what we do in order to take a 
                    complex problem and compact it into an understandable and viable solution that will make a difference.  </p>
                </div>
                <div id="right">
                    blah
                </div>
            </section>
            <section className="container">
                <h1>What Kind of Work We Do</h1>
                <p>The sky’s the limit. But just as an example of some of the work we’ve done in the past few semesters...</p>
                <div className="flex projectTypes">
                    {projectTypes}
                </div>
            </section>
            <section className="container">
                <h1>Who Our Clients Are</h1>
                <p>You can imagine it as a spectrum. Whether it's large for-profit corporations that allow us to deep dive into 
                one component of their programs, mission-driven corporations that continuously strive for solutions beyond the 
                baseline of "good enough", or smaller social enterprises and nonprofits that gives us the opportunity to touch 
                multiple aspects, we work with them all. As long as our work for our clients is aiming to create a better, more sustainable world. </p>
            </section>
            <CallToAction />
        </section>
        );
    }
}


export default Projects;
