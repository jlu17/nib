import React from 'react';
import NavBar from '../components/NavBar';

class About extends React.Component {
  render() {
    document.title = 'About NIB';
    
    
    return (
      <section>
        <NavBar />
        <section class="container">
            <p>About Page</p>
        </section>
      </section>
    );
  }
}

export default About;
