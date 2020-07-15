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
                    <FooterLink link="/apply" name="FAQs" />
                </div>
                <div className="footerSection">
                    <FooterTitle text="Companies" />
                    <FooterLink link="/home" name="Our Value" />
                </div>
            </div>
        </footer>
    );
  }
}

export default Footer;
