import React from 'react';
import '../css/Projects.scss';
import CallToAction from '../components/CallToAction';
import projectTypeInfo from '../data/ProjectTypesText';
import ProjectType from '../components/ProjectType';
import ProjectHeroImage from '../img/projects/projectsHero.png';
import ProjectSpectrumImage from '../img/projects/projectSpectrum.png';

class Projects extends React.Component {
    render() {
        let projectTypes = projectTypeInfo.map((project) => {
            return <ProjectType 
                img={project.img}
                alt={project.alt}
                title={project.title}
                description={project.description}
                key={project.title}
            />
        })
        

        document.title = 'Projects of NIB';
        return (
        <section className="projectsPage">
            <section className="hero container">
                <div className="left">
                    <h3>PROJECTS</h3>
                    <h1>We Make Our Impact Through Dedicated Client Work</h1>
                    <p>Each semester we work alongside companies, non-profits and start-ups on a socially/environmentally driven problem. <br />
                    <br />
                    Defining the work space, conducting client research, and analyzing data are just a part of what we do in order to take a 
                    complex problem and compact it into an understandable and viable solution that will make a difference.  </p>
                </div>
                <div className="right heroImage verticallyCenter">
                    <img src={ProjectHeroImage} alt="NIB members collage" />
                </div>
            </section>
            <section className="container">
                <h1>What Kind of Work We Do</h1>
                <p>The sky’s the limit. But just as an example of some of the work we’ve done in the past few semesters...</p>
                <div className="flex projectTypes">
                    {projectTypes}
                </div>
            </section>
            <section className="container projectSpectrumSection">
                <h1>Who Our Clients Are</h1>
                <p>You can imagine it as a spectrum. Whether it's large for-profit corporations that allow us to deep dive into 
                one component of their programs, mission-driven corporations that continuously strive for solutions beyond the 
                baseline of "good enough", or smaller social enterprises and nonprofits that gives us the opportunity to touch 
                multiple aspects, we work with them all. As long as our work for our clients is aiming to create a better, more sustainable world. </p>
                <img className="hideOnMobile" src={ProjectSpectrumImage} alt="Spectrum of projects ranging from small nonprofits to large corporations" />
                <div className="mobileTimeline showOnMobile">
                    <h3>Smaller Social Enterprises and Nonprofits</h3>
                    <div className="grid">
                        <img src={require("../img/projects/pastClients/larkin.png")} alt="Larkin Youth Street Services" />
                        <img src={require("../img/projects/pastClients/volunteermatch.png")} alt="VolunteerMatch" />
                        <img src={require("../img/projects/pastClients/marinfoodbank.png")} alt="SF-Marin Food Bank" />
                        <img src={require("../img/projects/pastClients/stopthetraffik.png")} alt="Stop the Traffik" />
                    </div>
                    <h3>Mission-Driven Corporations</h3>
                    <div className="grid">
                        <img src={require("../img/projects/pastClients/lo3energy.png")} alt="Larkin Youth Street Services" />
                        <img src={require("../img/projects/pastClients/kulikuli.png")} alt="VolunteerMatch" />
                        <img src={require("../img/projects/pastClients/imperfectfoods.png")} alt="SF-Marin Food Bank" />
                        <img src={require("../img/projects/pastClients/semtive.png")} alt="Stop the Traffik" />
                    </div>
                    <h3>Large For-Profit Corporations</h3>
                    <div className="grid">
                        <img src={require("../img/projects/pastClients/casper.png")} alt="Larkin Youth Street Services" />
                        <img src={require("../img/projects/pastClients/stripe.png")} alt="VolunteerMatch" />
                        <img src={require("../img/projects/pastClients/lyft.png")} alt="SF-Marin Food Bank" />
                        <img src={require("../img/projects/pastClients/godaddy.png")} alt="Stop the Traffik" />
                    </div>
                </div>
            </section>
            <CallToAction />
        </section>
        );
    }
}


export default Projects;
