import * as React from 'react';
import {Route, Switch} from "react-router";
import Navbar from '../Navbar/Navbar';
import Portraits from '../Portraits/Portraits';
import SlideShow from '../SlideShow/SlideShow';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact={true} path="/" render={this.topPage} />
          <Route exact={true} path="/:folder" component={Portraits}/>
        </Switch>
      </div>
    );
  }
  
  private topPage() {
    return <SlideShow tag={"top"}/>
  }
}

export default App;
