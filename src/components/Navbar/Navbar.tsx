import * as React from 'react';
import {Link} from 'react-router-dom'
import {RouteComponentProps, withRouter} from 'react-router'
import './Navbar.css';
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {FolderListState, ImagesListState} from "../../store";

interface NavbarState {
  burgerActive: boolean,
}

interface NavbarProps {
  folderNames: string[],
  isLoading: boolean
}

interface DispatchProps {
  dispatch: Dispatch
}

class Navbar extends React.Component<NavbarProps & DispatchProps & RouteComponentProps, NavbarState> {
  constructor(props: any) {
    super(props);
    this.state = {
      burgerActive: false
    };
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
            {/* TODO: ルーティングが動的に行えないのでメニューを動的に作る意味がない */}
            {/*{this.props.folderNames.map((folder) => {*/}
              {/*return <Link to={`/${folder}`} className="navbar-item" key={folder} onClick={this.clearBurgerActive}>{folder}</Link>*/}
            {/*})}*/}
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
    return `navbar-burger burger ${this.state.burgerActive ? "is-active" : ""}`
  }

  private menuClassName() {
    return `navbar-menu ${this.state.burgerActive ? "is-active" : ""}`
  }

  private toggleBurgerActive() {
    const next = !this.state.burgerActive;
    this.setState({burgerActive: next});
  }

  private clearBurgerActive() {
    this.setState({burgerActive: false});
  }
}

export default withRouter(connect<{}, {}, NavbarProps & RouteComponentProps>(
  (state: { folders: FolderListState, images: ImagesListState }): NavbarProps => {
    return {
      folderNames: state.folders.list,
      isLoading: state.folders.isLoading
    }
  }
)(Navbar));
