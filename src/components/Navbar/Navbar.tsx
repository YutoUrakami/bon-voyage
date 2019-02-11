import * as React from 'react';
import {Link} from 'react-router-dom'
import * as cloudFunctions from '../../services/cloudFunctions'
import './Navbar.css';

interface NavbarState {
  burgerActive: boolean,
  folders: string[]
}

class Navbar extends React.Component<{}, NavbarState> {
  constructor(props: any) {
    super(props);
    this.state = {
      burgerActive: false,
      folders: []
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
            {this.state.folders.map((folder) => {
              return <Link to={`/${folder}`} className="navbar-item" key={folder} onClick={this.clearBurgerActive}>{folder}</Link>
            })}
          </div>
        </div>
      </nav>
    );
  }

  public componentWillMount() {
    cloudFunctions.listFolders().then((folderNames: string[]) => {
      folderNames.push("about");
      this.setState({folders: folderNames})
    });
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

export default Navbar;
