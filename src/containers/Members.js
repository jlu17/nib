import React from 'react';
import imageLeft from '../img/members/splash-left.png';
import imageRight from '../img/members/splash-right.png';
import AlumniCompanies from '../data/AlumniCompanies';
import Member from './../components/Member.js';
import '../css/Members.scss';
import memberInfo from '../data/memberInfo';
import imageList from '../data/Carousel';
import CallToAction from '../components/CallToAction';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "../css/flickity.css";

import photo1 from '../img/members/carousel/photo1.jpg';
import photo2 from '../img/members/carousel/photo2.jpg';
import photo3 from '../img/members/carousel/photo3.jpg';

import styled from 'styled-components';
import Carousel from '../components/Carousel';


const AlumniCompany = ({name, href, fileName}) => {
    return <a href={href} target="_blank" rel="noopener noreferrer"><img src={require(`../img/careers/${fileName}`)} alt={name} /></a>;
}

class Members extends React.Component {
    handleOnDragStart = (e) => e.preventDefault();


    render() {
        document.title = 'NIB | Members';

        let execList = memberInfo.execList.map((person) => {
            return <Member
                    name={person.name}
                    title={person.title}
                    year={person.year}
                    linkedin={person.linkedin}
                    image={person.image}
                    sillyImage={person.sillyImage}
                    key={person.name}
                />
          }
        );

        let memberList = memberInfo.memberList.map((person) => {
            return <Member
                    name={person.name}
                    title={person.title}
                    year={person.year}
                    linkedin={person.linkedin}
                    image={person.image}
                    sillyImage={person.sillyImage}
                    key={person.name}
                />
        });

        let responsive =   {
            0: {
                items: 1,
            },
            1024: {
                items: 2
            }
        };

        let images = imageList.map((photo) => {
            return <img src={photo.src} />
        })

        console.log(images)

        return (
        <section className="membersPage">
            <section className="membersHero">
                <section className="container">
                    <img src={imageLeft} alt="Collage of individual NIB members on Zoom" />
                    <h1>Meet Us</h1>
                    <img src={imageRight} alt="Collage of individual NIB members on Zoom" />
                </section>
            </section>
            <svg className="invertedWave showOnMobile" viewBox="0 0 1440 150" fill="#F0FCFE" xmlns="http://www.w3.org/2000/svg">
                <path d="M-24 101.603L57.6667 81.0547C139.333 60.1201 302.667 0.789418 466 0.5C629.333 0.789418 792.667 90.9914 956 101.603C1119.33 112.215 1282.67 60.1201 1364.33 50.1834L1446 39.8609V194.217H1364.33C1282.67 194.217 1119.33 194.217 956 194.217C792.667 194.217 629.333 194.217 466 194.217C302.667 194.217 139.333 194.217 57.6667 194.217H-24V101.603Z" fill="#ffffff"/>
            </svg>
            <svg width="600" className="splashWaveLeft hideOnMobile" viewBox="0 0 600 569" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M229.5 22.5C170.5 2 0 0 0 0V562.5C0 562.5 99 575.004 132.5 562.5C166 549.996 186 520 258.5 483C331 446 407 521.5 493.5 515.5C580 509.5 638.5 451 567.5 362C496.5 273 302.5 323.5 272.5 260.5C242.5 197.5 334.5 207.5 338 143C341.5 78.5 288.5 43 229.5 22.5Z" fill="#F0FCFE"/>
            </svg>
            <svg width="599" className="splashWaveRight hideOnMobile" viewBox="0 0 599 569" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M369.721 545.557C428.721 566.057 599.221 568.057 599.221 568.057V5.55713C599.221 5.55713 500.221 -6.94641 466.721 5.55713C433.221 18.0607 413.221 48.0571 340.721 85.0571C268.221 122.057 192.221 46.5571 105.721 52.5571C19.2207 58.5571 -39.2793 117.057 31.7207 206.057C102.721 295.057 296.721 244.557 326.721 307.557C356.721 370.557 264.721 360.557 261.221 425.057C257.721 489.557 310.721 525.057 369.721 545.557Z" fill="#F0FCFE"/>
            </svg>
            <section className= "showOnMobile tapQueue">
                <section className= "abiTest">
                <h4 className= "tapOn"> Tap on a member's image for a surprise </h4>
                </section>
            </section>
            <section>
                <section className="container memberGallery">
                    <h2>Executive Board</h2>
                    <div>{execList}</div>
                    <h2>Members</h2>
                    <div>{memberList}</div>
                </section>
            </section>
            <svg className="wave hideOnMobile" viewBox="0 0 1440 150" fill="#F0FCFE" xmlns="http://www.w3.org/2000/svg">
                <path d="M-24 101.603L57.6667 81.0547C139.333 60.1201 302.667 0.789418 466 0.5C629.333 0.789418 792.667 90.9914 956 101.603C1119.33 112.215 1282.67 60.1201 1364.33 50.1834L1446 39.8609V194.217H1364.33C1282.67 194.217 1119.33 194.217 956 194.217C792.667 194.217 629.333 194.217 466 194.217C302.667 194.217 139.333 194.217 57.6667 194.217H-24V101.603Z" fill="#F0FCFE"/>
            </svg>
            <section className="carousel hideOnMobile">
                <section className="container">
                    <div class="carouselView">
                        <Carousel>
                            <img src={photo1} />
                            <img src={photo2} />
                            <img src={photo3} />
                        </Carousel>
                    </div>
                   
                    {/* <div onClick={() => this.Carousel.slidePrev()} className="carouselPointer">
                        <svg width="30" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="40.7681" y="56.2985" width="11.897" height="45.7575" transform="rotate(135 40.7681 56.2985)" fill="#1B67B1"/>
                            <rect x="32.3555" width="11.897" height="45.7575" transform="rotate(45 32.3555 0)" fill="#1B67B1"/>
                        </svg>
                    </div>
                    <Wrapper>
                    <AliceCarousel
                        buttonsDisabled={true}
                        items={this.state.galleryItems}
                        ref={(el) => (this.Carousel = el)}
                        stagePadding={{
                            paddingLeft: 20,     // in pixels
                            paddingRight: 10
                        }}
                    />
                    </Wrapper>

                    <div onClick={() => this.Carousel.slideNext()} className="carouselPointer">
                        <svg width="30" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="23.9434" y="8.41241" width="11.897" height="45.7575" transform="rotate(-45 23.9434 8.41241)" fill="#1B67B1"/>
                            <rect x="32.3555" y="64.7109" width="11.897" height="45.7575" transform="rotate(-135 32.3555 64.7109)" fill="#1B67B1"/>
                        </svg>
                    </div> */}
                </section>
            </section>
            <svg className="invertedWave hideOnMobile" viewBox="0 0 1440 150" fill="#F0FCFE" xmlns="http://www.w3.org/2000/svg">
                <path d="M-24 101.603L57.6667 81.0547C139.333 60.1201 302.667 0.789418 466 0.5C629.333 0.789418 792.667 90.9914 956 101.603C1119.33 112.215 1282.67 60.1201 1364.33 50.1834L1446 39.8609V194.217H1364.33C1282.67 194.217 1119.33 194.217 956 194.217C792.667 194.217 629.333 194.217 466 194.217C302.667 194.217 139.333 194.217 57.6667 194.217H-24V101.603Z" fill="#ffffff"/>
            </svg>
            <section className="alumniSection">
                <section className="grid container">
                    <div>
                        <img src={require('../img/members/alumni.jpg')} alt="NIB alumni" />
                    </div>
                    <div className="verticallyCenter">
                        <h2>Alumni</h2>
                        <p>After their time in Net Impact Berkeley, our alumni have gone on to make their impacts in a wide 
                        array of career paths, from consulting to software engineering to finance to grad school and more.</p>
                    </div>
                </section>
                <section className="container">
                    <h2>Where Our Alumni Are</h2>
                    <div className="company-logos">
                        {AlumniCompanies.map((company, i) =>
                            <AlumniCompany key={i} name={company.name} href={company.href} fileName={company.fileName} />)}
                    </div>
                </section>
            </section>
            <CallToAction />
        </section>
        );
    }
}

export default Members;
