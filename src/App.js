import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react/react.js'
import '../node_modules/react-bootstrap/dist/react-bootstrap.min.js';

import React, { Component } from 'react';
import './App.css';
// import P5Wrapper from 'react-p5-wrapper';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="App-header">
          <h1 className="App-title">My Sketch Application</h1>
        </header>

        <p className="App-intro">
          React and Processing together
        </p>
        {/* <P5Wrapper sketch={sketch} />*/}
      </div>
    );
  }
}


export default App;
