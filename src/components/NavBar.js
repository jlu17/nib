import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';
import { CSSTransition } from 'react-transition-group';


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
        <div className="container navbar">
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
        <div className="mobileNav">
          <div className="burgerIcon">
            <HamburgerMenu
              isOpen={this.state.open}
              menuClicked={this.handleClick}
              width={18}
              height={15}
              strokeWidth={3}
              color='black'
              className='burgerIcon'
            />
          </div>
          <CSSTransition
            in={this.state.open}
            classNames="display"
            timeout={500}
            unmountOnExit
          >
            <ul className="mobileList">
              <li><Link to={'/'} className="tab">HOME</Link></li>
              <li><Link to={'/about'} className="tab">ABOUT</Link></li>
              <li><Link to={'/members'} className="tab">MEMBERS</Link></li>
              <li><Link to={'/projects'} className="tab">PROJECTS</Link></li>
              <li><Link to={'/apply'} className="tab">APPLY</Link></li>
            </ul>
          </CSSTransition>
        </div>
      </div>
    );
  }
}

export default NavBar;
