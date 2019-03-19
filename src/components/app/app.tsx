import * as React from 'react';
import Navbar from '../navbar/navbar';
import './app.css';
import Copyright from '../copyright/copyright'
import BvRouter from "../bvRouter/bvRouter";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Copyright/>
        <Navbar/>
        <div className="main">
          <BvRouter/>
        </div>
      </div>
    );
  }
}

export default App;
