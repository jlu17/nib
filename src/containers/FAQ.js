import React from 'react';
import logo from '../img/logo.svg';
import nibLogo from '../img/nib-full-logo.png';
import Button from '../components/Button';
import NavBar from '../components/NavBar';
import CallToAction from '../components/CallToAction';
import '../css/Home.scss'

class FAQ extends React.Component {
  render() {
    document.title = 'NIB | FAQ';
    return (
      <section class="faqPage">
        <NavBar />
        <section class="hero container">
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
        <CallToAction />
      </section>
    );
  }
}

export default FAQ;
