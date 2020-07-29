import React from 'react';
import NavBar from '../components/NavBar';
import '../css/About.scss';
import aboutPhoto from '../img/about/about-header.png';
import aboutRetreat from '../img/about/AboutRetreat.jpg';
import CallToAction from '../components/CallToAction';

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

        <section class="aboutcont">
          <div id = "left">
            <img src= {aboutRetreat} height= "280"/>
          </div>
          <div id = "right">
            <h1>About Us</h1>
            <p>Net Impact Berkeley is a student-run consulting club on the
            University of California Berkeley's campus. We offer
            comprehensive strategy solutions to our clients, ranging from
            non-profits and social enterprises to large corporations
            and Fortune 500s, to improve their performance and
            to ensure a lasting impact.</p>
            <p>For over 10 years, we have brought together the best minds in
            Berkeley from various disciplines and backgrounds
            to solve problems that promote social good.</p>
          </div>
        </section>
        <CallToAction />
      </section>
    );
  }
}


export default About;
