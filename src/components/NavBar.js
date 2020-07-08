import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';

import css from '../css/NavBar.css';

class NavBar extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      open: false,
    }
  }

  handleClick = () => {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <div className="nav">
        <ul>
          <li>
            <Link to="/" className="logo">
              <img
                src='../img/nib-full-logo.png'
                alt="NIB logo"
                height="20"
                />
            </Link>
          </li>
          <div className="right">
            <li><NavLink to={'/'} className="tab" activeClassName="selected">Home</NavLink></li>
            <li><NavLink to={'/about'} className="tab" activeClassName="selected">ABOUT</NavLink></li>
            <li><NavLink to={'/members'} className="tab" activeClassName="selected">MEMBERS</NavLink></li>
            <li><NavLink to={'/project'} className="tab" activeClassName="selected">PROJECT</NavLink></li>
            <li><NavLink to={'/apply'} className="tab" activeClassName="selected">APPLY</NavLink></li>
          </div>
        </ul>
      </div>
    );
  }
}

export default NavBar;
