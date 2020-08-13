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
        <section className="hero container">
            <span id="left">
                <h1>FAQs</h1>
                <Button
                    link="/apply"
                    buttonText="Apply now"
                />
            </span>
            <span id="right">
                <p>images and stuff</p>
            </span>
        </section>
        <section className="questions">
          <h2> Questions </h2>
          <h3>What is Net Impact Berkeley?</h3>
          <h3>What differentiates NIB from other consulting clubs on campus?</h3>
          <h3>What is consulting?</h3>
          <h3>How does NIB train its members?</h3>
          <h3>What kind of projects does NIB do?</h3>
          <h3>What does NIB look for in applicants?</h3>
          <h3>What is the application process?</h3>
          <h3>What are the interviews like?</h3>
          <h3>What are the info sessions?</h3>
          <h3>Does NIB take all majors?</h3>
          <h3>Does NIB take all years?</h3>
        </section>
        <CallToAction />
      </section>
    );
  }
}

export default FAQ;
