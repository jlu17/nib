import React from 'react';
import NavBar from '../components/NavBar';

class Members extends React.Component {
  render() {
    document.title = 'Members of NIB';
    return (
      <section>
        <NavBar />
        <section class="container">
            <p>Members Page</p>
        </section>
      </section>
    );
  }
}

export default Members;
