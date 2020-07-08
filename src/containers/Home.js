import React from 'react';
import logo from '../img/logo.svg';
import nibLogo from '../img/nib-full-logo.png';
import '../App.css';
import Button from '../components/Button';
import NavBar from '../components/NavBar';

class Home extends React.Component {
  render() {
    document.title = 'NIB | Home';
    return (
      <div>
        <NavBar />
        <header className="App-header">
          <img src={nibLogo} className="App-logo" alt="logo" />
          <p>
            nib <code>Pranav</code> chowder
          </p>
          <Button text="Chowder sucks" />
          <Button text="hehe jk" />
        </header>
      </div>
    );
  }
}

export default Home;
