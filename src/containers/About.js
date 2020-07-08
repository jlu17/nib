import React from 'react';
import NavBar from '../components/NavBar';

class About extends React.Component {
  render() {
    document.title = 'About NIB';
    return (
      <div>
        <NavBar />
        <p>About Page</p>
      </div>
    );
  }
}

export default About;
