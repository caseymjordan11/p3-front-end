import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from 'react-router-dom'
import './App.css';
import NavItem from './NavItem'


class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <NavItem />
          <main>

            {/* calendar
             map */}
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
