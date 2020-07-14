import React from 'react';
import NavBar from '../components/NavBar';

class NotFound extends React.Component {
  render() {
    document.title = 'NIB | 404';
    return (
      <section class="notFoundPage">
        <NavBar />
        <p>404 Page</p>
      </section>
    );
  }
}

export default NotFound;
