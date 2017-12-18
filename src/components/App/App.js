import React, { Component } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import PigeonMap from '../PigeonMap/PigeonMap'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact path="/map"
            render={() => {
              return(
                <PigeonMap
                />
              )
            }}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
