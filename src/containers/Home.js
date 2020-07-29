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

import banking from '../img/home/icons/AccessibleBanking.png'
import literacy from '../img/home/icons/ChildrensLiteracy.png'
import crowdfunding from '../img/home/icons/Crowdfunding.png'
import earth from '../img/home/icons/earth.png'
import education from '../img/home/icons/Education.png'
import environment from '../img/home/icons/Environment.png'
import fairtrade from '../img/home/icons/FairTrade.png'
import female from '../img/home/icons/FemaleEmpowerment.png'
import foodsecurity from '../img/home/icons/FoodSecurity.png'
import foodwaste from '../img/home/icons/FoodWaste.png'
import healthtech from '../img/home/icons/HealthTechnology.png'
import humanrights from '../img/home/icons/HumanRights.png'
import impactinvestment from '../img/home/icons/ImpactInvestment.png'
import lamp from '../img/home/icons/lamp.png'
import leaf from '../img/home/icons/leaf.png'
import energy from '../img/home/icons/SustainableEnergy.png'
import retail from '../img/home/icons/SustainableRetail.png'
import technnology from '../img/home/icons/Technology.png'
import volunteering from '../img/home/icons/Volunteering.png'
import youthservices from '../img/home/icons/YouthServices.png'


class Home extends React.Component {
  render() {
    document.title = 'NIB | Home';

    let spectrum = spectrumInfo[0]

    return (
      <section class="homePage">
        <NavBar />
        <section class="hero container">
            <span class="left">
                <h1>Strategy consulting meets social good</h1>
                <Button
                    link="/apply"
                    buttonText="Apply now"
                />
            </span>
            <span class="right">
                <div class="test">
                    <svg className="bigBlob" width="650" height="572" viewBox="0 0 650 572" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M502.554 212.204C541.576 245.066 628.38 256.67 643.225 281.052C658.284 305.025 600.382 341.773 581.058 406.475C561.127 471.38 579.347 565.055 550.932 563.71C522.517 562.365 449.319 466.203 387.941 449.188C326.957 432.378 277.186 494.918 227.285 513.511C177.384 532.103 124.86 507.768 77.2651 467.309C29.8841 426.442 -12.5676 369.45 11.5662 323.365C35.0923 277.482 125.812 242.302 167.751 190.978C209.509 139.04 202.093 70.7509 226.505 34.6806C250.523 -1.59575 306.762 -5.44739 354.672 6.60652C402.582 18.6604 442.771 46.4181 457.91 86.5371C473.443 126.862 463.713 179.956 502.554 212.204Z" fill="#79ECFF"/>
                    </svg>
                </div>
                
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
                <span id="left">
                    
                </span>
                <span id="right">
                    <h1>Inspired to make a difference</h1>
                    <p>We are a student-run consulting group on campus that provides custom strategies for clients that range from social enterprises and non-profits, to traditional for-profit businesses.</p>
                    <Button
                        link="/projects"
                        buttonText="Learn about us"
                    />
                </span>
            </div>
        </section>

        {/* WORK IN PROGRESS, to be automated + some positioning work to do - adhiv */}

        <section class="spectrums">
            <div class="row">
                <div class="projectType">
                    <img src={banking} />
                    <p>Accessible Banking</p>
                </div>
                <div class="projectType">
                    <img src={literacy} />
                    <p>Children's Literacy</p>
                </div>
                <div class="projectType">
                    <img src={crowdfunding} />
                    <p>Crowdfunding</p>
                </div>
            </div>
            <div class="row">
                <div class="projectType">
                    <img src={earth} />
                    <p>Earth</p>
                </div>
                <div class="projectType">
                    <img src={education} />
                    <p>Education</p>
                </div>
                <div class="projectType">
                    <img src={environment} />
                    <p>Environment</p>
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
                    <img src={banking} />
                    <p>Accessible Banking</p>
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
