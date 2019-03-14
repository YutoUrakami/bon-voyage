import * as React from 'react';
import {Route, Switch} from "react-router";
import Navbar from '../Navbar/Navbar';
import Top from '../Top/Top';
import './App.css';
import GripWrapper from '../GridWrapper/GripWrapper'
import About from '../About/About'
import NotFound from '../NotFound/NotFound'
import Copyright from '../copyright/copyright'
import {connect} from "react-redux";
import {Dispatch} from "redux";
// import {listingFolders} from "../../reducers/folderListReducer";

interface DispatchProps {
  dispatch: Dispatch
}

class App extends React.Component<DispatchProps> {
  public render() {
    return (
      <div className="App">
        <Copyright/>
        <Navbar/>
        <div className="main">
          <Switch>
            <Route exact={true} path="/" component={Top}/>
            <Route path="/un_fils" render={this.un_fils}/>
            <Route path="/portraits" render={this.portraits}/>
            <Route path="/yokohama" render={this.yokohama}/>
            <Route path="/about" component={About}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </div>
    );
  }

  // TODO: 動的ルーティングができるようになったら使う
  // public componentWillMount(): void {
  //   listingFolders()(this.props.dispatch);
  // }

  private un_fils() {
    return <GripWrapper folderName="un_fils"/>
  }

  private portraits() {
    return <GripWrapper folderName="portraits"/>
  }

  private yokohama() {
    return <GripWrapper folderName="yokohama"/>
  }
}

export default connect()(App);
