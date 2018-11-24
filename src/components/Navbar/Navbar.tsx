import * as React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
  public render() {
    return (
      <nav className="navbar is-transparent is-fixed-bottom-desktop" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <p className="main-brand">bon voyage!</p>
          </a>
          <p className="navbar-item sub-brand">phoooutty's photo gallery</p>
          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"/>
            <span aria-hidden="true"/>
            <span aria-hidden="true"/>
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item"> kou </a> <a className="navbar-item"> portraits </a>
            <a className="navbar-item"> snaps </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
