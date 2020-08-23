import React from 'react';
import '../css/Projects.scss';
import CallToAction from '../components/CallToAction';
import projectTypeInfo from '../data/ProjectTypesText';
import ProjectType from '../components/ProjectType';
import ProjectHeroImage from '../img/projects/projectsHero.png';
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
                key={client.link}
            />
        });

        let clientImagesMobile = clientImages.slice(0, 12);


        document.title = 'NIB | Projects';
        return (
        <section className="projectsPage">
            <section className="hero container">
                <div className="left">
                    <h3>PROJECTS</h3>
                    <h1>Making an Impact <br /> With Our Clients</h1>
                    <p>Each semester, our teams help companies, social enterprises, and non-profits form strategies to solve social and environmental problems. <br />
                    <br />
                    We take a multi-disciplinary approach to working on projects across a wide range of industries and impact areas.</p>
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
                    <h1>Our Solutions</h1>
                    <p>For over a decade, we’ve developed and expanded our consulting capabilities to support clients in many ways, some of which include:</p>
                    <div className="flex projectTypes">
                        {projectTypes}
                    </div>
                </section>
            </section>
            <section className="container projectSpectrumSection">
                <h1>Our Clients</h1>
                <img className="hideOnMobile" src={ClientSpectrumNew} alt="Spectrum of projects ranging from small nonprofits to large corporations" />
                <p>We work with organizations of all kinds that are interested in contributing to a better, more sustainable world. 
                Whether it's for-profit corporations that allow us to deep dive into
                one component of their programs, mission-driven corporations that continuously strive for solutions beyond the
                baseline of "good enough", or smaller social enterprises and nonprofits that give us the opportunity to touch
                multiple aspects, we work with them all. </p>
                <div className="clientsSection hideOnMobile">
                    {clientImages}
                </div>
                <div className="clientsSection showOnMobile">
                    {clientImagesMobile}
                </div>
            </section>
            <CallToAction />
        </section>
        );
    }
}


export default Projects;
