import React from 'react';
import NavBar from '../components/NavBar';
import Button from '../components/Button';
import nibGroup from '../img/nib-group.png';
import '../css/Home.css'


class Apply extends React.Component {
  render() {
    document.title = 'Apply to NIB';
    return (
      <section>
        <NavBar />
        <section class="container">
          <span id="left">
            <h1>Apply to Net Impact</h1>
            <h3>Put your email down to be notified when we open up applications</h3>
            <Button
              link="/Apply"
              buttonText="Apply Here"
              />
          </span>
          <span id="right">
            <img src= {nibGroup} />
            <p>images and stuff</p>
          </span>
        </section>
      </section>

    );
  }
}

export default Apply;
