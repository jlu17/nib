import React from 'react';
import NavBar from '../components/NavBar';
import '../css/About.scss';
import aboutPhoto from '../img/about/about-header.png';

class About extends React.Component {
  render() {
    document.title = 'About NIB';
    return (
      <section class="aboutPage">
        <NavBar />
        <section class="hero container">
          <div id="left">
            <h3>ABOUT US</h3>
            <h1>Inspired by our mission</h1>
            <p>Through our focus on social and environmental impact,
            innovative methods, and diverse backgrounds, we strive to
            bring social responsibility and environmental stewardship
            to business and innovation.  </p>
          </div>
          <div id="right">
            <img src= {aboutPhoto} />
          </div>
        </section>
      </section>
    );
  }
}


export default About;
