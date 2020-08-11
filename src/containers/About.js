import React from 'react';
import NavBar from '../components/NavBar';
import '../css/About.scss';
import aboutPhoto from '../img/about/about-header.png';
import aboutRetreat from '../img/about/AboutRetreat.jpg';
import CallToAction from '../components/CallToAction';
import chowderGang from '../img/about/chowderGang.png';
import EdAndAdhiv from '../img/about/Ed&Adhiv.png';
import GarySaltBae from '../img/about/GarySaltBae.png';
import GoDaddy from '../img/about/GoDaddy.png';
import WelcomeToNib from '../img/about/WelcomeToNib.png';
import BeachDay from '../img/about/beachday.png';

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
        
        
    <section class="culture">
        <h1>Life in nib</h1>
        <div id="table">
            <div class="col">
              <img src= {chowderGang} height= "280"/>
             <p class="caption">A couple of nib fellows enjoying a hearty bowl of clam chowder just off of the Pacific highway.</p>
            </div>
            <div class="col">
              <img src= {GarySaltBae} height= "280"/>
             <p class="caption">Our Fall niblet class participated in the Basic Needs cooking competition. Here Gary is doing his best Salt bae impression.</p>
            </div>
            <div class="col">
              <img src= {EdAndAdhiv} height= "280"/>
             <p class="caption">A good super spash bros session where Edward is congradulating Adhiv on his spectacular victory.</p>
            </div>
            <div class="col">
              <img src= {WelcomeToNib} height= "280"/>
             <p class="caption">Nib members at one of the semester’s infosessions. Excited to welcome applicants!</p>
            </div>
            <div class="col">
              <img src= {GoDaddy} height= "280"/>
             <p class="caption">Every semester our project teams have team socials. Here one of our teams went on the fire trails hike and enjoyed a nice brunch</p>
            </div>
            <div class="col">
              <img src= {BeachDay} height= "280"/>
             <p class="caption">Good times and vibes at the beach!</p>
            </div>
        </div>
        </section>
        <CallToAction />
      </section>
      
      
    );
  }
}


export default About;
