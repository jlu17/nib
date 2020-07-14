import React from 'react';
import NavBar from '../components/NavBar';
import Button from '../components/Button';
import nibGroup from '../img/nib-group.png';
import '../css/Apply.scss';

class Apply extends React.Component {
  render() {
    document.title = 'Apply to NIB';
    return (
      <section class="applyPage">
        <NavBar />
        <section class="hero container">
          <div class="left">
            <h3>APPLY</h3>
            <h1>Apply to Net Impact</h1>
            <p>Put your email down to be notified when we open up applications</p>
            <Button
              link="/Apply"
              buttonText="Apply Here"
              />
          </div>
          <div class="right">
            <img src= {nibGroup} />
          </div>
        </section>
      </section>

    );
  }
}

export default Apply;
