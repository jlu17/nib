import React from 'react';
import NavBar from '../components/NavBar';

class Projects extends React.Component {
  render() {
    document.title = 'Projects of NIB';
    return (
      <div>
        <NavBar />
        <p>Projects Page</p>
      </div>
    );
  }
}

export default Projects;
