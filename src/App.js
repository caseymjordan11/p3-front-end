import React, { Component } from 'react';
import {
  Router,
  Redirect,
  Link
} from 'react-router-dom'
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to="home" img="logo"></Link>
            <h1>SocialFit</h1>
            <Link to=""></Link>

          </nav>

        </div>
      </Router>
    );
  }
}

export default App;
