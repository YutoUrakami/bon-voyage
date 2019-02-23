import * as React from 'react';
import {Route, Switch} from "react-router";
import Navbar from '../Navbar/Navbar';
import Top from '../Top/Top';
import './App.css';
import GripWrapper from '../GridWrapper/GripWrapper'
import About from '../About/About'
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
        <Navbar/>
        <Switch>
          <Route exact={true} path="/" component={Top} />
          <Route path="/kou" render={this.kou}/>
          <Route path="/portraits" render={this.portraits}/>
          <Route path="/yokohama" render={this.yokohama}/>
          <Route path="/about" component={About} />
        </Switch>
      </div>
    );
  }

  // TODO: 動的ルーティングができるようになったら使う
  // public componentWillMount(): void {
  //   listingFolders()(this.props.dispatch);
  // }

  private kou() {
    return <GripWrapper folderName="kou"/>
  }
  private portraits() {
    return <GripWrapper folderName="portraits"/>
  }
  private yokohama() {
    return <GripWrapper folderName="yokohama"/>
  }
}

export default connect()(App);
