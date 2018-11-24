import * as React from 'react';
import Navbar from '../Navbar/Navbar';
import SlideShow from '../SlideShow/SlideShow'
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Navbar/>
        <SlideShow tag={"top"}/>
      </div>
    );
  }
}

export default App;
