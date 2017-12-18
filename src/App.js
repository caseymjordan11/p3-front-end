import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from 'react-router-dom'
import './App.css';
import NavItem from './NavItem'
import MapItem from './MapItem'
import CreateEvent from './CreateEvent'

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <NavItem />
          <MapItem />
        </div>
      </Router>
    );
  }
}

export default App;
