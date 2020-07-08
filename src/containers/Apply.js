import React from 'react';
import NavBar from '../components/NavBar';

class Apply extends React.Component {
  render() {
    document.title = 'Apply to NIB';
    return (
      <section>
        <NavBar />
        <section class="container">
            <p>Apply Page</p>
        </section>
      </section>
    );
  }
}

export default Apply;
