import * as React from 'react';
import {Route, Switch} from "react-router";
import Navbar from '../Navbar/Navbar';
import Top from '../Top/Top';
import './App.css';
import GripWrapper from '../GridWrapper/GripWrapper'
import About from '../About/About'

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
          <Route path="/about" component={About} />
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
