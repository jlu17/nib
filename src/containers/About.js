import React from 'react';
import NavBar from '../components/NavBar';
import '../css/About.scss';
import aboutPhoto from '../img/about/about-header.png';
import aboutRetreat from '../img/about/AboutRetreat.jpg';
import CallToAction from '../components/CallToAction';
import growth from '../img/about/GrowthMindset.png';
import passion from '../img/about/InspiringPassion.png';
import tenacious from '../img/about/TenaciousProblemSolvers.png';
import nibfam from '../img/about/Nibfam.png';
import values from '../img/about/ValuesPhoto.png';


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

        <section class="section aboutcont">
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

      <section class="section stats">
        <div>
          <h2>100+</h2>
          <p>Consulting Projects Completed</p>
        </div>

        <div>
          <h2>10+</h2>
          <p>Years of Experience Since 2008</p>
        </div>

        <div>
          <h2>80+</h2>
          <p>Net Impact Berkeley Alumni</p>
        </div>

        <div>
          <h2>100,000+</h2>
          <p>Net Impact National Network</p>
        </div>
      </section>

      <section class = "section values">
      <h1>Driven by Our Core Values</h1>
      </section>

      <section class="section values">

        <div>
          <div id = "value">
            <img src={passion} height = "90"/>
            <div>
              <h2>Inspiring Passion</h2>
              <p>NIB members don't give up when there isn't an easy route to take.
              Rather, we seek opportunity to solve challenges, overcome
              major obstacles and persevere to test new solutions.</p>
            </div>
          </div>

          <div id = "value">
            <img src={growth} height = "100"/>
            <div>
              <h2>Growth Mindset</h2>
              <p>Imagine if you could do anything because you believe you can.
              We do. Net Impact believes in giving our members the space to
              stretch ourselves and cultivate the growth mindset...</p>
            </div>
          </div>

          <div id = "value">
            <img src={tenacious} height = "100"/>
            <div>
              <h2>Tenacious Problem Solvers</h2>
              <p>We believe that  all types of impact add value in different ways
              to making the world a better place. To this end, we work on a broad
              variety of projects from environmental sustainability to zero
              poverty and financial empowerment. </p>
            </div>
          </div>

          <div id = "value">
            <img src={nibfam} height = "100"/>
            <div>
              <h2>#NIBfam</h2>
              <p>Net Impact is not just a student organization, we're like family.
              When it comes to assignments that you are having trouble or spending
              evenings unwinding over a warm cooked meal, we celebrate the value
              that each one of our members brings to our NIBfam.</p>
            </div>
          </div>
        </div>

        <div id = "right">
          <img src={values} height = "450"/>
        </div>

      </section>

      <CallToAction />
    </section>
    );
  }
}


export default About;
