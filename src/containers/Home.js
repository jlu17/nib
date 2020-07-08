import React from 'react';
import logo from '../img/logo.svg';
import nibLogo from '../img/nib-full-logo.png';
import Button from '../components/Button';
import NavBar from '../components/NavBar';
import '../css/Home.css'

class Home extends React.Component {
  render() {
    document.title = 'NIB | Home';
    return (
      <div>
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
      </div>
    );
  }
}

export default Home;
