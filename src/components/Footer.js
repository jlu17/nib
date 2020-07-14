import React from 'react';
import '../css/Footer.scss';
import logo from '../img/nib-full-logo.png'

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
              <p className="footerTitle">General</p>
              <FooterLink link="/about" name="About" />
              <FooterLink link="/members" name="Members" />
              <FooterLink link="/projects" name="Projects" />
              <FooterLink link="https://medium.com/net-impact-berkeley" name="Blog" />
            </div>
            <div className="footerSection">
              <p className="footerTitle">Students</p>
              <FooterLink link="/apply" name="Apply" />
              <FooterLink link="/apply" name="FAQs" />
            </div>
            <div className="footerSection">
              <p className="footerTitle">Companies</p>
              <FooterLink link="/home" name="Our Value" />
            </div>
          </div>
      </footer>
    );
  }
}

export default Footer;
