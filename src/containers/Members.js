import React from 'react';
import NavBar from '../components/NavBar';

class Members extends React.Component {
  render() {
    document.title = 'Members of NIB';
    return (
      <div>
        <NavBar />
        <p>Members Page</p>
      </div>
    );
  }
}

export default Members;
