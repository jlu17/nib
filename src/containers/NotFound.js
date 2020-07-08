import React from 'react';
import NavBar from '../components/NavBar';

class NotFound extends React.Component {
  render() {
    document.title = 'NIB | 404';
    return (
      <div>
        <NavBar />
        <p>404 Page</p>
      </div>
    );
  }
}

export default NotFound;
