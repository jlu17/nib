import React from 'react';
import '../css/NotFound.scss';

class NotFound extends React.Component {
  render() {
    document.title = 'NIB | 404';
    return (
      <section className="notFoundPage">
        <p>404 Page</p>
      </section>
    );
  }
}

export default NotFound;
