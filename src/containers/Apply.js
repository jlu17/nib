import React from 'react';
import NavBar from '../components/NavBar';

class Apply extends React.Component {
  render() {
    document.title = 'Apply to NIB';
    return (
      <div>
        <NavBar />
        <p>Apply Page</p>
      </div>
    );
  }
}

export default Apply;
