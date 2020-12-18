import React from 'react';
import './notFound.scss';
import alex from './img/alex-bowlcut.jpg';

class NotFound extends React.Component {
  render() {
    document.title = 'NIB | 404';
    return (
      <section className="notFoundPage">
        <div className="alex">
          <img src={alex} alt="Image of a young NIB member with his mouth open in shock that the website team has put him on a 404 page" />
        </div>
        <section className="container">
          <h1>404</h1>
          <p>We can't find the link you put into the browser. You can either 1) go back to the <a href="/">home page</a> or 2) take a breather and enjoy the lovely photo of our VP Associate Development.</p>
        </section>
      </section>
    );
  }
}

export default NotFound;
