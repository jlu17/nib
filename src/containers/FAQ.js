import React from 'react';
import logo from '../img/logo.svg';
import nibLogo from '../img/nib-full-logo.png';
import Button from '../components/Button';
import NavBar from '../components/NavBar';
import CallToAction from '../components/CallToAction';
import '../css/FAQ.scss'

class FAQ extends React.Component {
  render() {
    document.title = 'NIB | FAQ';
    return (
      <section className="faqPage">
        <section className="questions container">
          <h2> Questions </h2>
          <h4>What differentiates NIB from other consulting clubs on campus?</h4>
          <p>In the end, everything comes down to finding the right community for you. But aside from our tight-knit community, 
          here are some other differentiators:</p>
          <ul>
            <li>Experience: We are one of the oldest clubs on campus, with 11 years of experience and 150+ clients under our belt.</li>
            <li>Global network: We are one of hundreds of Net Impact chapters across the globe.</li>
          </ul>
          <h4>What is consulting?</h4>
          <p></p>
          <h4>How does NIB train its members?</h4>
          <p></p>
          <h4>What kind of projects does NIB do?</h4>
          <h4>What does NIB look for in applicants?</h4>
          <h4>What is the application process?</h4>
          <h4>What are the interviews like?</h4>
          <p>There are two rounds of interviews:</p>
          <ul>
            <li></li>
          </ul>
          <h4>What are the info sessions?</h4>
          <p>The info sessions are a good chance for you to get to know NIB better, learn about the application process, 
          and meet current NIB members.</p>
          <h4>Does NIB take all majors?</h4>
          <p>Yes! We welcome all majors. While consulting is typically thought of as a business pursuit, but </p>
          <h4>Does NIB take all years?</h4>
          <p>Yes! We welcome all years, including single-year exchange students.</p>
        </section>
        <CallToAction />
      </section>
    );
  }
}

export default FAQ;
