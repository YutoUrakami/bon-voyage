import * as React from 'react';
import {Route, Switch} from "react-router";
import Kou from '../Kou/Kou'
import Navbar from '../Navbar/Navbar';
import Portraits from '../Portraits/Portraits';
import Top from '../Top/Top';
import './App.css';
import Yokohama from '../Yokohama/Yokohama'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact={true} path="/" component={Top} />
          <Route path="/kou" component={Kou}/>
          <Route path="/portraits" component={Portraits}/>
          <Route path="/yokohama" component={Yokohama}/>
        </Switch>
      </div>
    );
  }
}

export default App;
