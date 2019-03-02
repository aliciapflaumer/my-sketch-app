import React, { Component } from 'react';
import './App.css';
import { Navbar, Nav, NavItem} from 'react-bootstrap';
import { Sketch } from './components/sketch';

const sketch = (width, height, props) => {
  return function (p5) {
    // let value = props.value;

    p5.setup = () => {
      p5.background(102);
      p5.strokeWeight(10);
    }

    p5.draw = () => {
      // p5.fill(value, 16);
      // p5.noStroke();
      // p5.rect(0, 0, width, height);
      // p5.stroke((value + 128) % 256);
      p5.stroke(255);
      p5.line(p5.pmouseX, p5.pmouseY, p5.mouseX, p5.mouseY);
    };

  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  render() {
    return (
      <div className="container" style={{ width: '100%', height: '100%' }} onClick={() => { this.setState({ value: (this.state.value + 5)%256 }) }}>
        <header className="App-header">
          <h1 className="App-title">My Sketch Application</h1>
        </header>

        <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">Home</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                About
              </NavItem>
              {/*}<NavItem eventKey={2} href="#">
                Link
              </NavItem>*/}
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <p className="App-intro">

        </p>
        <Sketch
          sketch={sketch}
          width={'80%'}
          height={'80%'}
          sketchProps={{ value: this.state.value}}
        />

      <Navbar fixedBottom>
            <p>
              Made by Alicia Pflaumer<br />
              <a href="https://github.com/aliciapflaumer">Github</a> | <a href="https://www.linkedin.com/in/aliciapflaumer/">LinkedIn</a>
            </p>
          </Navbar>
      </div>
    );
  }
}


export default App;
