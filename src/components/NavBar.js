import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';

import css from '../css/NavBar.scss';
import logo from '../img/nib-full-logo.png';

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
        <div class="container">
          <ul>
            <li>
              <Link to="/" className="logo">
                <img src={logo} alt="NIB logo" height="20" />
              </Link>
            </li>
            <div className="right">
              <li><NavLink to={'/'} className="tab" activeClassName="selected">HOME</NavLink></li>
              <li><NavLink to={'/about'} className="tab" activeClassName="selected">ABOUT</NavLink></li>
              <li><NavLink to={'/members'} className="tab" activeClassName="selected">MEMBERS</NavLink></li>
              <li><NavLink to={'/projects'} className="tab" activeClassName="selected">PROJECTS</NavLink></li>
              <li><NavLink to={'/apply'} className="tab" activeClassName="selected">APPLY</NavLink></li>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;
