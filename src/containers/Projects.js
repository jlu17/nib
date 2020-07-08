import React from 'react';
import NavBar from '../components/NavBar';

class Projects extends React.Component {
  render() {
    document.title = 'Projects of NIB';
    return (
      <section>
        <NavBar />
        <section class="container">
            <p>Projects Page</p>
        </section>
      </section>
    );
  }
}

export default Projects;
