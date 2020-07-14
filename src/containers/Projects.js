import React from 'react';
import NavBar from '../components/NavBar';

class Projects extends React.Component {
  render() {
    document.title = 'Projects of NIB';
    return (
      <section>
        <NavBar />
        <section class="container">
            <h3>PROJECTS</h3>
            <h1>We make our impact through dedicated client work</h1>
            <p>Each semester we take on a diverse set of companies. Isn’t that
            so cool that we do that. I think it’s awesome that we have so many
            types of projects all year long. NIB is superior. </p>
        </section>
      </section>
    );
  }
}

export default Projects;
