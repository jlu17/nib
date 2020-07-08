import React from 'react';
import NavBar from '../components/NavBar';
import fang from '../img/fang.png';
import '../css/Members.css';
import imageLeft from '../img/images-left.png';
import imageRight from '../img/images-right.png';

class Members extends React.Component {
  render() {
    document.title = 'Members of NIB';
    return (
      <section>
        <NavBar />
        <section class="blueBackground">
          <section class="container membersHero">
            <img src={imageLeft} />
            <h1>Meet Us</h1>
            <img src={imageRight} />
          </section>
        </section>
        <section>
          <section class="container">
            <h2>Inspired by our mission.</h2>
            <p>We are great members. We are great members. We are great members.
            We are great members. We are great members. We are great members. We are great members.</p>
            <h2>Executive Board</h2>
            <img src={fang} className="memberImage" />
            <img src={fang} className="memberImage" />
            <img src={fang} className="memberImage" />
            <img src={fang} className="memberImage" />
            <img src={fang} className="memberImage" />
            <h2>Members</h2>
            <img src={fang} className="memberImage" />
            <img src={fang} className="memberImage" />
            <img src={fang} className="memberImage" />
            <img src={fang} className="memberImage" />
            <img src={fang} className="memberImage" />
            <img src={fang} className="memberImage" />
            <img src={fang} className="memberImage" />
            <img src={fang} className="memberImage" />
            <img src={fang} className="memberImage" />
            <img src={fang} className="memberImage" />
          </section>
        </section>
        <section>
          <section class="container">
            <h2>Alumni</h2>
            <p>After our Net Impact Berkeley careers, we create our impact across a
            diverse spectrum of careers, from graduate school to consulting to software
            engineering, and everything in-between.</p>
          </section>
        </section>
        <section>
          <section class="container">
            <h2>Where do our alumni go?</h2>
            <div id = "company-logos">
             <a href = 'https://www.mckinsey.com/' target = "_blank"><img src={require('../img/careers/mckinsey.png')} /></a>
             <a href = 'http://www.bain.com/' target = "_blank"><img src={require('../img/careers/bain.png')} /></a>
             <a href = 'https://www.bcg.com/' target = "_blank"><img src={require('../img/careers/bcg.png')} /></a>
             <a href = 'https://www.apple.com/' target = "_blank"><img src={require('../img/careers/apple.png')} /></a>
             <a href = 'https://www2.deloitte.com/us/en.html' target = "_blank"> <img src={require('../img/careers/deloitte.png')} /></a>
             <a href = 'http://www.goldmansachs.com/' target = "_blank"><img src={require('../img/careers/gs.png')} /></a>
             <a href = 'https://www.google.com/' target = "_blank"><img src={require('../img/careers/google.png')} /></a>
             <a href = 'https://www.facebook.com/' target = "_blank">   <img src={require('../img/careers/fb.png')} /></a>
             <a href = 'https://www.linkedin.com/' target = "_blank"><img src={require('../img/careers/linkedin.png')} /></a>
             <a href = 'https://www.airbnb.com/' target = "_blank"> <img src={require('../img/careers/airbnb.png')} /></a>
             <a href = 'https://slack.com/' target = "_blank"><img src={require('../img/careers/slack.png')} /></a>
             <a href = 'https://www.coursera.org/' target = "_blank"><img src={require('../img/careers/coursera.png')} /></a>
             <a href = 'https://robinhood.com/' target = "_blank"><img src={require('../img/careers/robinhood.png')} /></a>
             <a href = 'https://www.lyft.com/' target = "_blank"><img src={require('../img/careers/lyft.png')} /></a>
             <a href = 'https://www.tesla.com/' target = "_blank"><img src={require('../img/careers/tesla.png')} /></a>
             <a href = 'https://squareup.com/' target = "_blank"><img src={require('../img/careers/square.png')} /></a>
             <a href = 'https://www.kiva.org/' target = "_blank"><img src={require('../img/careers/kiva.png')} /></a>
             <a href = 'https://www.teachforamerica.org/' target = "_blank"><img src={require('../img/careers/tfa.png')} /></a>
             <a href = 'https://www.hbs.edu/Pages/default.aspx' target = "_blank"><img src={require('../img/careers/hbs.png')} /></a>
             <a href = 'https://www.gsb.stanford.edu/' target = "_blank"><img src={require('../img/careers/stanford.png')} /></a>
             <a href = 'https://www.ucsf.edu/' target = "_blank"> <img src={require('../img/careers/ucsf.png')} /></a>
             <a href = 'http://engineering.columbia.edu/' target = "_blank"> <img src={require('../img/careers/columbia.png')} /></a>
             <a href = 'https://www.wharton.upenn.edu/' target = "_blank"><img src={require('../img/careers/wharton.png')} /></a>
             <a href = 'https://www.nasa.gov/' target = "_blank"> <img src={require('../img/careers/nasa.png')} /> </a>
             <a href = 'https://www.kkr.com/' target = "_blank"> <img src={require('../img/careers/kkr.png')} /></a>
             <a href = 'http://www.ox.ac.uk/' target = "_blank"> <img src={require('../img/careers/oxford.png')} /></a>
             <a href = 'http://www.centerviewpartners.com/' target = "_blank"> <img src={require('../img/careers/centerview1.png')} /></a>
             <a href = 'http://www.redf.org/' target = "_blank"> <img src={require('../img/careers/redf.png')} /></a>
             <a href = 'http://www.uber.com/' target = "_blank"> <img src={require('../img/careers/uber.png')} /></a>
             <a href = 'https://www.cam.ac.uk//' target = "_blank"> <img src={require('../img/careers/cambridge.png')} /></a>
           </div>
          </section>
        </section>
      </section>
    );
  }
}

export default Members;
