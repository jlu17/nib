import React from 'react';
import NavBar from '../components/NavBar';
import fang from '../img/members/fang.png';
import imageLeft from '../img/images-left.png';
import imageRight from '../img/images-right.png';
import AlumniCompanies from '../data/AlumniCompanies';
import Member from './../components/Member.js';
import '../css/Members.scss';
import memberInfo from '../data/memberInfo'

const AlumniCompany = ({name, href, fileName}) => {
    return <a href={href} target="_blank"><img src={require(`../img/careers/${fileName}`)} alt={name} /></a>;
}

class Members extends React.Component {
    render() {
        document.title = 'Members of NIB';

        let execList = memberInfo.execList.map((person) => {
            return <Member 
                      name={person.name}
                      title={person.title}
                      year={person.year}
                      linkedin={person.linkedin}
                      image={person.image}
                  />
          }
        )

        let memberList = memberInfo.memberList.map((person) => {
            return <Member 
                        name={person.name}
                        title={person.title}
                        year={person.year}
                        linkedin={person.linkedin}
                        image={person.image}
                    />
        })
                
        return (
        <section className="membersPage">
            <NavBar />
            <section className="blueBackground">
            <section className="container membersHero">
                <img src={imageLeft} />
                <h1>Meet Us</h1>
                <img src={imageRight} />
            </section>
            </section>
            <section>
            <section className="container">
                <h2>Inspired by our mission.</h2>
                <p>We are great members. We are great members. We are great members.
                We are great members. We are great members. We are great members. We are great members.</p>
                <h2>Executive Board</h2>
                  {execList}
                <h2>Members</h2>
                  {memberList}
            </section>
            </section>
            <section>
            <section className="container">
                <h2>Alumni</h2>
                <p>After our Net Impact Berkeley careers, we create our impact across a
                diverse spectrum of careers, from graduate school to consulting to software
                engineering, and everything in-between.</p>
            </section>
            </section>
            <section>
            <section className="container">
                <h2>Where do our alumni go?</h2>
                <div id = "company-logos">
                    {AlumniCompanies.map((company, i) => 
                        <AlumniCompany key={i} name={company.name} href={company.href} fileName={company.fileName} />)}
            </div>
            </section>
            </section>
        </section>
        );
    }
}

export default Members;
