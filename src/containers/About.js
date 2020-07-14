import React from 'react';
import NavBar from '../components/NavBar';
import '../css/About.scss';

class About extends React.Component {
  render() {
    document.title = 'About NIB';
    
    
    return (
      <section class="aboutPage">
        <NavBar />
        <section class="container">
            <p>About Page</p>
        </section>
      </section>
    );
  }
}

export default About;
