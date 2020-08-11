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
import growth from '../img/about/GrowthMindset.png';
import passion from '../img/about/InspiringPassion.png';
import tenacious from '../img/about/TenaciousProblemSolvers.png';
import nibfam from '../img/about/Nibfam.png';
import values from '../img/about/ValuesPhoto.png';
import NetImpactGlobal from '../img/about/NetImpactGlobal.png';
import Button from '../components/Button';

class About extends React.Component {
    render() {
        document.title = 'About NIB';
        return (
            <section className="aboutPage">
                <NavBar />
                <section className="hero container">
                    <div>
                        <h3>ABOUT US</h3>
                        <h1>Inspired by our mission</h1>
                        <p>Through our focus on social and environmental impact,
                        innovative methods, and diverse backgrounds, we strive to
                        bring social responsibility and environmental stewardship
                        to business and innovation.</p>
                    </div>
                    <div class="heroImage">
                        <img src={aboutPhoto} alt="Collage of NIB members" />
                    </div>
                </section>

                <section className="aboutUsSection">
                    <section className="grid container">
                        <div className="left">
                            <img src= {aboutRetreat} alt="Group photo of NIB members" />
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
                            <h2>80+</h2>
                            <p>Net Impact Berkeley Alumni</p>
                        </div>

                        <div>
                            <h2>100,000+</h2>
                            <p>Net Impact National Network</p>
                        </div>
                    </section>
                </section>

                <section className="container valuesSection">
                    <div className="valuesOnLeft"> 
                        <h1>Driven by Our Core Values</h1> 
                        <div className="value">
                            <img src={passion} height = "90" alt="Inspiring Passion icon" />
                            <div>
                                <h2>Inspiring Passion</h2>
                                <p>NIB members don't give up when there isn't an easy route to take.
                                Rather, we seek opportunity to solve challenges, overcome
                                major obstacles and persevere to test new solutions.</p>
                            </div>
                        </div>

                        <div className="value">
                            <img src={growth} height = "100" alt="Growth Mindset icon" />
                            <div>
                                <h2>Growth Mindset</h2>
                                <p>Imagine if you could do anything because you believe you can.
                                We do. Net Impact believes in giving our members the space to
                                stretch ourselves and cultivate the growth mindset...</p>
                            </div>
                        </div>

                        <div className="value">
                            <img src={tenacious} height = "100" alt="Tenacious Problem Solvers icon" />
                            <div>
                                <h2>Tenacious Problem Solvers</h2>
                                <p>We believe that  all types of impact add value in different ways
                                to making the world a better place. To this end, we work on a broad
                                variety of projects from environmental sustainability to zero
                                poverty and financial empowerment. </p>
                            </div>
                        </div>

                        <div className="value">
                            <img src={nibfam} height = "100" alt="NIBFam icon"/>
                            <div>
                                <h2>#NIBfam</h2>
                                <p>Net Impact is not just a student organization, we're like family.
                                When it comes to assignments that you are having trouble or spending
                                evenings unwinding over a warm cooked meal, we celebrate the value
                                that each one of our members brings to our NIBfam.</p>
                            </div>
                        </div>
                    </div>
                    <div className="verticallyCenter right">
                        <img src={values} alt="Photo collage of NIB members in various scenarios" />
                    </div>
                </section>

                <section className="globalSection">
                    <h1>Net Impact’s Global Organization</h1>
                    <div className="grid container">
                        <div className="left verticallyCenter">
                            <img src={NetImpactGlobal} alt="2 NIB members attending a Net Impact conference"/>
                        </div>
                        <div className="right verticallyCenter">
                            <p>We are the leading Gold Status undergraduate chapter of the global organization of Net Impact, which consists of 
                            100,000+ undergraduates, graduates, and professionals united by the common mission of using business for social good.<br/>
                            <br/>
                            As a part of this global community, we are able to leverage the minds of industry experts and professionals in our 
                            project work, attend national events and collaborate across our 300 chapters. </p>
                            <Button link="https://www.netimpact.org/home" buttonText="Learn about NI Global"/>
                        </div>
                    </div>
                </section>

                <section className="cultureSection container">
                    <h1>Life in nib</h1>
                    <div className="cultureTable">
                        <div className="col">
                            <img src= {chowderGang} height= "280" alt="5 NIB members enjoying clam chowder" />
                            <p>A couple of nib fellows enjoying a hearty bowl of clam chowder just off of the Pacific highway.</p>
                        </div>
                        <div className="col">
                            <img src= {GarySaltBae} height= "280" alt="1 NIB member throwing salt onto his food at a food competition" />
                            <p>Our Fall niblet class participated in the Basic Needs cooking competition. Here Gary is doing his best Salt bae impression.</p>
                        </div>
                        <div className="col">
                            <img src= {EdAndAdhiv} height= "280" alt="1 NIB member showering another NIB member with coins after playing video games" />
                            <p>A good super spash bros session where Edward is congradulating Adhiv on his spectacular victory.</p>
                        </div>
                        <div className="col">
                            <img src= {WelcomeToNib} height= "280" alt="4 NIB members posed in front of a whiteboard saying Welcome to NIB during a past infosession" />
                            <p>Nib members at one of the semester’s infosessions. Excited to welcome applicants!</p>
                        </div>
                        <div className="col">
                            <img src= {GoDaddy} height= "280" alt="4 NIB members on a project team enjoying lunch in the woods" />
                            <p>Every semester our project teams have team socials. Here one of our teams went on the fire trails hike and enjoyed a nice brunch</p>
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
