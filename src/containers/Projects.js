import React from 'react';
import NavBar from '../components/NavBar';
import '../css/Projects.scss';

class Projects extends React.Component {
  render() {
    document.title = 'Projects of NIB';
    return (
      <section class="projectsPage">
        <NavBar />
        <section class="hero container">
            <div id="left">
              <h3>PROJECTS</h3>
              <h1>We make our impact through dedicated client work</h1>
              <p>Each semester we take on a diverse set of companies. Isn’t that
              so cool that we do that. I think it’s awesome that we have so many
              types of projects all year long. NIB is superior. </p>
            </div>
            <div id="right">
              blah
            </div>
        </section>
      </section>
    );
  }
}

export default Projects;
