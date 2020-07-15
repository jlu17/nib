import React from 'react';
import logo from '../img/logo.svg';
import nibLogo from '../img/nib-full-logo.png';
import Button from '../components/Button';
import NavBar from '../components/NavBar';
import CallToAction from '../components/CallToAction';
import '../css/Home.scss'

class Home extends React.Component {
  render() {
    document.title = 'NIB | Home';
    return (
      <section class="homePage">
        <NavBar />
        <section class="hero container">
            <span id="left">
                <h1>Strategy consulting meets social good</h1>
                <Button
                    link="/apply"
                    buttonText="Apply now"
                />
            </span>
            <span id="right">
                <p>images and stuff</p>
            </span>
        </section>

        <svg width="1440" className="wave" height="195" viewBox="0 0 1440 195" fill="#F0FCFE" xmlns="http://www.w3.org/2000/svg">
        <path d="M-24 101.603L57.6667 81.0547C139.333 60.1201 302.667 0.789418 466 0.5C629.333 0.789418 792.667 90.9914 956 101.603C1119.33 112.215 1282.67 60.1201 1364.33 50.1834L1446 39.8609V194.217H1364.33C1282.67 194.217 1119.33 194.217 956 194.217C792.667 194.217 629.333 194.217 466 194.217C302.667 194.217 139.333 194.217 57.6667 194.217H-24V101.603Z" fill="#F0FCFE"/>
        </svg>

        <section class="inspired">
            <div class="container">
                <h2>Inspired to make a difference</h2>
                <p>We are a student-run consulting group on campus. We consult for social enterprises, non-profits, and sustainable businesses.</p>
            </div>
        </section>

        <section class="spectrums">
            <div class="container">
                <h2>Impact across all spectrums</h2>
                <p>There’s no limit to the types of projects that our members seek out. We strive to continue searching for new ways to make an impact.</p>
                <Button
                    link="/projects"
                    buttonText="Learn about our projects"
                />
            </div>
        </section>

        <svg width="1440" height="195" className="wave" viewBox="0 0 1440 195" fill="#F0FCFE" xmlns="http://www.w3.org/2000/svg">
        <path d="M-24 101.603L57.6667 81.0547C139.333 60.1201 302.667 0.789418 466 0.5C629.333 0.789418 792.667 90.9914 956 101.603C1119.33 112.215 1282.67 60.1201 1364.33 50.1834L1446 39.8609V194.217H1364.33C1282.67 194.217 1119.33 194.217 956 194.217C792.667 194.217 629.333 194.217 466 194.217C302.667 194.217 139.333 194.217 57.6667 194.217H-24V101.603Z" fill="#F0FCFE"/>
        </svg>

        <section class="partners">
            <div class="container">
                <h2>150+ international partners</h2>
                <Button
                    link="/projects"
                    buttonText="Learn about our projects"
                />
            </div>
        </section>

        <section class="who">
            <div class="container">
                <h2>Who are we?</h2>
                <p>We are cool people. We like to hang out. But most of all, we like to make Slack reacts. We are cool people. We like to hang out. But most of all, we like to make Slack reacts. We are cool people. We like to hang out. </p>
                <Button
                    link="/projects"
                    buttonText="Learn about our projects"
                />
            </div>
        </section>

        <CallToAction />
      </section>
    );
  }
}

export default Home;
