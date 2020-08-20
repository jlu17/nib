import React from 'react';
import '../css/Projects.scss';
import CallToAction from '../components/CallToAction';
import projectTypeInfo from '../data/ProjectTypesText';
import ProjectType from '../components/ProjectType';
import ProjectHeroImage from '../img/projects/projectsHero.png';
import ProjectSpectrumImage from '../img/projects/projectSpectrum.png';
import ClientSpectrumNew from '../img/projects/ClientSpectrum.png';
import clients from '../data/Clients';
import ClientImage from '../components/ClientImage';

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
        });

        let clientImages = clients.map((client) => {
            return <ClientImage
                img={client.img}
                link={client.link}
            />
        });

        let clientImagesMobile = clientImages.slice(0, 12);


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
            <svg className="wave" viewBox="0 0 1440 120" fill="#F0FCFE" xmlns="http://www.w3.org/2000/svg">
                <path d="M-24 101.603L57.6667 81.0547C139.333 60.1201 302.667 0.789418 466 0.5C629.333 0.789418 792.667 90.9914 956 101.603C1119.33 112.215 1282.67 60.1201 1364.33 50.1834L1446 39.8609V194.217H1364.33C1282.67 194.217 1119.33 194.217 956 194.217C792.667 194.217 629.333 194.217 466 194.217C302.667 194.217 139.333 194.217 57.6667 194.217H-24V101.603Z" fill="#F0FCFE"/>
            </svg>
            <section className="projectTypesSection">
                <section className="container">
                    <h1>What Kind of Work We Do</h1>
                    <p>The sky’s the limit. But just as an example of some of the work we’ve done in the past few semesters...</p>
                    <div className="flex projectTypes">
                        {projectTypes}
                    </div>
                </section>
            </section>
            <section className="container projectSpectrumSection">
                <h1>Who Our Clients Are</h1>
                <p>You can imagine it as a spectrum. Whether it's large for-profit corporations that allow us to deep dive into
                one component of their programs, mission-driven corporations that continuously strive for solutions beyond the
                baseline of "good enough", or smaller social enterprises and nonprofits that give us the opportunity to touch
                multiple aspects, we work with them all. As long as our work for our clients is aiming to create a better, more sustainable world. </p>
                <img className="hideOnMobile" src={ClientSpectrumNew} alt="Spectrum of projects ranging from small nonprofits to large corporations" />
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
            <section className="container clientsSection">
                <h1>Past Clients</h1>
                <div class="hideOnMobile">
                    {clientImages}
                </div>
                <div class="showOnMobile">
                    {clientImagesMobile}
                </div>
            </section>
            <CallToAction />
        </section>
        );
    }
}


export default Projects;
