import * as React from 'react';
import {Route, Switch} from "react-router";
import Navbar from '../Navbar/Navbar';
import Top from '../Top/Top';
import './App.css';
import GripWrapper from '../GridWrapper/GripWrapper'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact={true} path="/" component={Top} />
          <Route path="/kou" render={this.kou}/>
          <Route path="/portraits" render={this.portraits}/>
          <Route path="/yokohama" render={this.yokohama}/>
        </Switch>
      </div>
    );
  }

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

export default App;
