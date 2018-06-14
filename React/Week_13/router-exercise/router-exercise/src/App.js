import React, { Component } from 'react';
import './App.css';
import BootstrapNavBar from './BootstrapNavBar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import About from './About';
import Images from './Images';
import MayorMessage from './MayorMessage';
import Atlanta from './Atlanta'

var atlImages = [
  'http://i.huffpost.com/gen/1716876/images/o-ATLANTA-TRAFFIC-facebook.jpg',
  'http://2.bp.blogspot.com/--XZFLg6LSq8/U4YV65sb2MI/AAAAAAAAO8A/cFl-Em5Zb0A/s1600/Sawfish_Atlanta_Aquarium.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/a/a3/Piedmont-park-urban-park.jpg'
]

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <BootstrapNavBar />
          <div className="container main">
            <h1>Main App</h1>
          </div>
          <Route path="/about" component={About} />
          <Route path="/images" render={(props)=>(
              <Images atlImages={atlImages} /> 
          )}  />
          <Route path="/mayorMessage" component={MayorMessage} />
          <Route path="/weather" component={Atlanta} />
        </div>
      </Router>
    );
  }
}

export default App;
