import React from 'react';
import '../css/Footer.scss';
import logo from '../img/nib-full-logo.png'

const FooterTitle = ({ text }) => {
    return <p className="footerTitle">{text}</p>
}

const FooterLink = ({ link, name }) => {
    return <a href={link} className="footerLink">{name}</a>;
}

class Footer extends React.Component {
  render() {
    return (
        <footer>
            <div className="footerLeft">
                <img alt="NIB logo" src={logo} className="footerImage" />
                <p className="copyrightText">Copyright Net Impact Berkeley, 2020.</p>
            </div>
            <div className="footerRight">
                <div className="footerSection">
                    <FooterTitle text="General" />
                    <FooterLink link="/about" name="About" />
                    <FooterLink link="/members" name="Members" />
                    <FooterLink link="/projects" name="Projects" />
                    <FooterLink link="https://medium.com/netimpactberkeley" name="Blog" />
                </div>
                <div className="footerSection">
                    <FooterTitle text="Students" />
                    <FooterLink link="/apply" name="Apply" />
                    <FooterLink link="/faq" name="FAQs" />
                </div>
                <div className="footerSection">
                    <FooterTitle text="Companies" />
                    <FooterLink link="/home" name="Our Value" />
                </div>
                <div className="socialSection">
                    <img src={require("../img/social/facebook.png")} className="socialIcon" alt="Facebook icon" />
                    <img src={require("../img/social/medium.png")} className="socialIcon" alt="Medium icon" />
                    <img src={require("../img/social/linkedin.png")} className="socialIcon" alt="LinkedIn icon" />
                    <img src={require("../img/social/instagram.png")} className="socialIcon" alt="Instagram icon" />
                </div>
            </div>
        </footer>
    );
  }
}

export default Footer; 
