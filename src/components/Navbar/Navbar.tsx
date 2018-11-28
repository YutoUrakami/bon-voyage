import * as React from 'react';
import {Link} from 'react-router-dom'
import * as cloudFunctions from '../../services/cloudFunctions'
import './Navbar.css';

interface NavbarState {
  folders: string[]
}

class Navbar extends React.Component<{}, NavbarState> {
  constructor(props: any) {
    super(props);
    this.state = {
      folders: []
    }
  }

  public render() {
    return (
      <nav className="navbar is-transparent is-fixed-bottom" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <p className="main-brand">bon voyage!</p>
          </a>
          <p className="navbar-item sub-brand">phoooutty's photo gallery</p>
          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
             data-target="navbarBasicExample">
            <span aria-hidden="true"/>
            <span aria-hidden="true"/>
            <span aria-hidden="true"/>
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            {this.state.folders.map((folder) => {
              return <Link to={`/${folder}`} className="navbar-item" key={folder}>{folder}</Link>
            })}
          </div>
        </div>
      </nav>
    );
  }

  public componentWillMount() {
    cloudFunctions.listFolders().then((folderNames: string[]) => {
      this.setState({folders: folderNames})
    });
  }
}

export default Navbar;
