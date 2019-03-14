import * as React from 'react';
import {Link} from 'react-router-dom'
import {RouteComponentProps, withRouter} from 'react-router'
import './navbar.css';
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {FolderListState, ImagesListState, BurgerMenuState} from "../../store";
import {changeBurgerMenuActivity} from "../../reducers/burgerMenuReducer";

interface NavbarProps {
  burgerActive: boolean,
}

interface DispatchProps {
  dispatch: Dispatch
}

class Navbar extends React.Component<NavbarProps & DispatchProps & RouteComponentProps> {
  constructor(props: any) {
    super(props);
    this.toggleBurgerActive = this.toggleBurgerActive.bind(this);
    this.clearBurgerActive = this.clearBurgerActive.bind(this);
  }

  public render() {
    return (
      <nav className="navbar is-transparent is-fixed-bottom" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <p className="main-brand">bon voyage!</p>
          </a>
          <p className="navbar-item sub-brand">phoooutty's photo gallery</p>
          <a role="button" className={this.burgerClassName()} aria-label="menu" aria-expanded="false"
             data-target="navbarBasicExample" onClick={this.toggleBurgerActive}>
            <span aria-hidden="true"/>
            <span aria-hidden="true"/>
            <span aria-hidden="true"/>
          </a>
        </div>
        <div className={this.menuClassName()}>
          <div className="navbar-end">
            <Link to="/un_fils" className="navbar-item" onClick={this.clearBurgerActive}>un fils</Link>
            <Link to="/portraits" className="navbar-item" onClick={this.clearBurgerActive}>portraits</Link>
            <Link to="/yokohama" className="navbar-item" onClick={this.clearBurgerActive}>yokohama</Link>
            <Link to="/about" className="navbar-item" onClick={this.clearBurgerActive}>about</Link>
          </div>
        </div>
      </nav>
    );
  }
  
  private burgerClassName() {
    return `navbar-burger burger ${this.props.burgerActive ? "is-active" : ""}`
  }

  private menuClassName() {
    return `navbar-menu ${this.props.burgerActive ? "is-active" : ""}`
  }

  private toggleBurgerActive() {
    const next = !this.props.burgerActive;
    changeBurgerMenuActivity(next)(this.props.dispatch)
  }

  private clearBurgerActive() {
    changeBurgerMenuActivity(false)(this.props.dispatch)
  }
}

export default withRouter(connect(
  (state: { folders: FolderListState, images: ImagesListState, burgerMenu: BurgerMenuState }): NavbarProps => {
    return {
      burgerActive: state.burgerMenu.isActive
    }
  }
)(Navbar));
