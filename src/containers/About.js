import React from 'react';
import '../css/About.scss';
import aboutPhoto from '../img/about/about-header.png';
import aboutRetreat from '../img/about/AboutRetreat.jpg';
import CallToAction from '../components/CallToAction';
import chowderGang from '../img/about/chowderGang.png';
import EdAndAdhiv from '../img/about/edAndAdhiv.png';
import GarySaltBae from '../img/about/GarySaltBae.png';
import projectHike from '../img/about/projectHike.png';
import WelcomeToNib from '../img/about/WelcomeToNib.png';
import BeachDay from '../img/about/beachday.png';
import values from '../img/about/ValuesPhoto.png';
import NetImpactGlobal from '../img/about/NetImpactGlobal.png';
import Button from '../components/Button';
import Values from '../components/Values';

class About extends React.Component {

    render() {
        document.title = 'About NIB';
        return (
            <section className="aboutPage">
                <section className="hero container">
                    <div>
                        <h3>ABOUT US</h3>
                        <h1>Inspired by our mission</h1>
                        <p>Through our focus on social and environmental impact,
                        innovative methods, and diverse backgrounds, we strive to
                        bring social responsibility and environmental stewardship
                        to business and innovation.</p>
                    </div>
                    <div className="heroImage">
                        <img src={aboutPhoto} alt="Collage of NIB members" />
                    </div>
                </section>

                <svg className="splashWave hideOnMobile" viewBox="0 0 1440 749" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M713.744 408.887C546.069 469.017 -2 454 -2 454V748.5H1440V0C1282.84 210.195 1071.62 83.1369 975.016 157.385C878.415 231.633 881.418 348.757 713.744 408.887Z" fill="#F0FCFE"/>
                </svg>

                <section className="aboutUsSection">
                    <section className="grid container">
                        <div className="left">
                            <img src= {aboutRetreat} alt="Group of NIB members" />
                        </div>
                        <div className="right">
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
                    <section className="statsSection container">
                        <div>
                            <h2>100+</h2>
                            <p>Consulting Projects Completed</p>
                        </div>

                        <div>
                            <h2>10+</h2>
                            <p>Years of Experience Since 2008</p>
                        </div>

                        <div>
                            <h2>160+</h2>
                            <p>Net Impact Berkeley Alumni</p>
                        </div>

                        <div>
                            <h2>100,000+</h2>
                            <p>Net Impact National Network</p>
                        </div>
                    </section>
                </section>

                <section className="container valuesSection">
                    <h1>Driven by Our Core Values</h1> 
                    <section className="grid">
                        <Values />
                        <div className="verticallyCenter right hideOnMobile">
                            <img src={values} alt="Collage of NIB members in various scenarios" />
                        </div>
                    </section>
                </section>

                <svg className="wave hideOnMobile" viewBox="0 0 1440 150" fill="#F0FCFE" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-24 101.603L57.6667 81.0547C139.333 60.1201 302.667 0.789418 466 0.5C629.333 0.789418 792.667 90.9914 956 101.603C1119.33 112.215 1282.67 60.1201 1364.33 50.1834L1446 39.8609V194.217H1364.33C1282.67 194.217 1119.33 194.217 956 194.217C792.667 194.217 629.333 194.217 466 194.217C302.667 194.217 139.333 194.217 57.6667 194.217H-24V101.603Z" fill="#F0FCFE"/>
                </svg>

                <section className="globalSection">
                    <div className="container">
                        <div className="showOnMobile">
                            <img src={NetImpactGlobal} alt="2 NIB members attending a Net Impact conference"/>
                        </div>
                        <h1>Net Impact’s Global Organization</h1>
                        <div className="grid">
                            <div className="left verticallyCenter hideOnMobile">
                                <img src={NetImpactGlobal} alt="2 NIB members attending a Net Impact conference"/>
                            </div>
                            <div className="right verticallyCenter">
                                <p>We are the leading Gold Status undergraduate chapter of the global organization of Net Impact, which consists of 
                                100,000+ undergraduates, graduates, and professionals united by the common mission of using business for social good.<br/>
                                <br/>
                                As a part of this global community, we are able to leverage the minds of industry experts and professionals in our 
                                project work, attend national events and collaborate across our 300 chapters. </p>
                                <Button link="https://www.netimpact.org/home" buttonText="Learn About NI Global" external />
                            </div>
                        </div>
                    </div>
                </section>

                <svg className="invertedWave hideOnMobile" viewBox="0 0 1440 150" fill="#F0FCFE" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-24 101.603L57.6667 81.0547C139.333 60.1201 302.667 0.789418 466 0.5C629.333 0.789418 792.667 90.9914 956 101.603C1119.33 112.215 1282.67 60.1201 1364.33 50.1834L1446 39.8609V194.217H1364.33C1282.67 194.217 1119.33 194.217 956 194.217C792.667 194.217 629.333 194.217 466 194.217C302.667 194.217 139.333 194.217 57.6667 194.217H-24V101.603Z" fill="#ffffff"/>
                </svg>

                <section className="cultureSection container">
                    <h1>Life in NIB</h1>
                    <div className="cultureTable">
                        <div className="col">
                            <img src= {chowderGang} className="lifeInNibPics" height= "280" alt="5 NIB members enjoying clam chowder" />
                            <p>A couple of NIB members enjoying a hearty bowl of clam chowder just off the Pacific Coast Highway.</p>
                        </div>
                        <div className="col">
                            <img src= {GarySaltBae} className="lifeInNibPics" height= "280" alt="1 NIB member throwing salt onto his food at a food competition" />
                            <p>Our Fall 2019 Niblet class participated in the Basic Needs cooking competition. Here's Gary doing his best Salt Bae impression.</p>
                        </div>
                        <div className="col">
                            <img src= {EdAndAdhiv} height= "280" alt="1 NIB member showering another NIB member with coins after playing video games" />
                            <p>Edward congratulating Adhiv on a spectacular victory after a Super Smash Bros. Ultimate session.</p>
                        </div>
                        <div className="col">
                            <img src= {WelcomeToNib} height= "280" alt="4 NIB members posed in front of a whiteboard saying Welcome to NIB during a past infosession" />
                            <p>NIB members at one of our infosessions excited to welcome applicants!</p>
                        </div>
                        <div className="col">
                            <img src= {projectHike} height= "280" alt="4 NIB members on a project team enjoying lunch in the woods" />
                            <p>Every semester our project teams have fun team socials. Here, a team hiked the Berkeley Fire Trails and enjoyed a nice brunch.</p>
                        </div>
                        <div className="col">
                            <img src= {BeachDay} height= "280" alt="NIB members at the beach" />
                            <p>Good times and vibes at the beach!</p>
                        </div>
                    </div>
                </section>
                <CallToAction />
            </section>
        );
    }
}


export default About;
