import React from 'react';
import logo from '../img/logo.svg';
import nibLogo from '../img/nib-full-logo.png';
import Button from '../components/Button';
import NavBar from '../components/NavBar';
import CallToAction from '../components/CallToAction';
import '../css/Home.scss'
import spectrumInfo from '../data/spectrum'
import godaddy from '../img/home/GoDaddy.png';
import imperfect from '../img/home/ImperfectFoods.png';
import kuli from '../img/home/KuliKuli.png';
import larkin from '../img/home/LarkinStreet.png';
import marin from '../img/home/MarinFoodBank.png';
import sierra from '../img/home/SierraNevada.png';

import blob1 from '../img/home/shapes/blob1.png';
import blob2 from '../img/home/shapes/blob2.png';


class Home extends React.Component {
  render() {
    document.title = 'NIB | Home';

    let spectrum = spectrumInfo[0]

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
                <svg className="bigBlob" width="900" height="791" viewBox="0 0 900 791" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M417.558 178.016C450.216 205.519 522.863 215.23 535.287 235.635C547.89 255.699 499.431 286.453 483.259 340.604C466.578 394.923 481.827 473.321 458.046 472.195C434.265 471.069 373.005 390.59 321.637 376.35C270.599 362.282 228.945 414.622 187.183 430.183C145.42 445.743 101.462 425.377 61.6295 391.516C21.9759 357.314 -13.5523 309.617 6.64554 271.048C26.3347 232.647 102.259 203.206 137.358 160.252C172.306 116.784 166.099 59.6326 186.53 29.4451C206.631 -0.914927 253.698 -4.1384 293.794 5.94963C333.891 16.0377 367.525 39.2683 380.195 72.8443C393.195 106.593 385.051 151.028 417.558 178.016Z" fill="#79ECFF"/>
                </svg>

                <svg className="miniBlob" width="91" height="75" viewBox="0 0 91 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M89.6851 32.0176C93.2985 41.7664 81.203 57.1611 65.3926 66.226C49.4787 75.321 29.9208 77.9597 17.5121 70.9377C5.10338 63.9157 0.0150779 47.236 0.413986 32.1847C0.916331 17.1033 6.9738 3.68343 15.7691 0.956559C24.5289 -1.70698 35.9586 6.28935 51.3346 12.3391C66.7462 18.3254 86.0361 22.3321 89.6851 32.0176Z" fill="#79ECFF"/>
                </svg>

                <img src={blob1} class="seniors" />
                <img src={blob2} class="emgajen" />

            </span>
        </section>

        <svg width="1440" className="wave" height="195" viewBox="0 0 1440 195" fill="#F0FCFE" xmlns="http://www.w3.org/2000/svg">
        <path d="M-24 101.603L57.6667 81.0547C139.333 60.1201 302.667 0.789418 466 0.5C629.333 0.789418 792.667 90.9914 956 101.603C1119.33 112.215 1282.67 60.1201 1364.33 50.1834L1446 39.8609V194.217H1364.33C1282.67 194.217 1119.33 194.217 956 194.217C792.667 194.217 629.333 194.217 466 194.217C302.667 194.217 139.333 194.217 57.6667 194.217H-24V101.603Z" fill="#F0FCFE"/>
        </svg>

        <section class="inspired">
            <div class="container">
                <h2>Inspired to make a difference</h2>
                <p>We are a student-run consulting group on campus. We consult for social enterprises, non-profits, and sustainable businesses.</p>
                <Button
                    link="/projects"
                    buttonText="Learn about us"
                />
            </div>
        </section>

        {/* WORK IN PROGRESS, to be automated + some positioning work to do - adhiv */}

        <section class="spectrums">
            <div class="row">
                <div class="projectType">
                    <img src={spectrum.icon} />
                    <p>{spectrum.name}</p>
                </div>
                <div class="projectType">
                    <img src={spectrum.icon} />
                    <p>{spectrum.name}</p>
                </div>
                <div class="projectType">
                    <img src={spectrum.icon} />
                    <p>{spectrum.name}</p>
                </div>
            </div>
            <div class="row">
                <div class="projectType">
                    <img src={spectrum.icon} />
                    <p>{spectrum.name}</p>
                </div>
                <div class="projectType">
                    <img src={spectrum.icon} />
                    <p>{spectrum.name}</p>
                </div>
                <div class="projectType">
                    <img src={spectrum.icon} />
                    <p>{spectrum.name}</p>
                </div>
                <div class="projectType">
                    <img src={spectrum.icon} />
                    <p>{spectrum.name}</p>
                </div>
                <div class="projectType">
                    <img src={spectrum.icon} />
                    <p>{spectrum.name}</p>
                </div>
                <div class="projectType">
                    <img src={spectrum.icon} />
                    <p>{spectrum.name}</p>
                </div>
            </div>

            <div class="container">
                <h1>Impact across all spectrums</h1>
                <p>There’s no limit to the types of projects that our members seek out. We strive to continue searching for new ways to make an impact.</p>
                <Button
                    link="/projects"
                    buttonText="Learn about our projects"
                />
            </div>

            <div class="row">
                <div class="projectType">
                    <img src={spectrum.icon} />
                    <p>{spectrum.name}</p>
                </div>
                <div class="projectType">
                    <img src={spectrum.icon} />
                    <p>{spectrum.name}</p>
                </div>
                <div class="projectType">
                    <img src={spectrum.icon} />
                    <p>{spectrum.name}</p>
                </div>
                <div class="projectType">
                    <img src={spectrum.icon} />
                    <p>{spectrum.name}</p>
                </div>
            </div>
            <div class="row">
                <div class="projectType">
                    <img src={spectrum.icon} />
                    <p>{spectrum.name}</p>
                </div>
                <div class="projectType">
                    <img src={spectrum.icon} />
                    <p>{spectrum.name}</p>
                </div>
                <div class="projectType">
                    <img src={spectrum.icon} />
                    <p>{spectrum.name}</p>
                </div>
                <div class="projectType">
                    <img src={spectrum.icon} />
                    <p>{spectrum.name}</p>
                </div>
                <div class="projectType">
                    <img src={spectrum.icon} />
                    <p>{spectrum.name}</p>
                </div>
                <div class="projectType">
                    <img src={spectrum.icon} />
                    <p>{spectrum.name}</p>
                </div>
            </div>

        </section>

        <svg width="1440" height="195" className="wave" viewBox="0 0 1440 195" fill="#F0FCFE" xmlns="http://www.w3.org/2000/svg">
        <path d="M-24 101.603L57.6667 81.0547C139.333 60.1201 302.667 0.789418 466 0.5C629.333 0.789418 792.667 90.9914 956 101.603C1119.33 112.215 1282.67 60.1201 1364.33 50.1834L1446 39.8609V194.217H1364.33C1282.67 194.217 1119.33 194.217 956 194.217C792.667 194.217 629.333 194.217 466 194.217C302.667 194.217 139.333 194.217 57.6667 194.217H-24V101.603Z" fill="#F0FCFE"/>
        </svg>

        <section class="partners ">
            <div class="container">
                <h1>150+ international partners</h1>

                <img src= {larkin} height= "80px"/>
                <img src= {marin} height= "140px"/>
                <img src= {godaddy} height= "90px"/>
                <img src= {imperfect} height= "90px"/>
                <img src= {kuli} height= "110px"/>
                <img src= {sierra} height= "90px"/>



            </div>
        </section>

        <section class="who">
            <div class="container">
                <h2>Who are we?</h2>
                <p>We are cool people. We like to hang out. But most of all, we like to make Slack reacts. We are cool people. We like to hang out. But most of all, we like to make Slack reacts. We are cool people. We like to hang out. </p>
                <Button
                    link="/projects"
                    buttonText="Learn about our members"
                />
            </div>
        </section>

        <CallToAction />
      </section>
    );
  }
}

export default Home;
