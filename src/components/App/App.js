import React, { Component } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import PigeonMap from '../PigeonMap/PigeonMap'
import axios from 'axios'



class App extends Component {
  constructor(props){
    super(props)
    this.state={
      day: {}
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/12-18-2017')
    .then((response) => {
      this.setState({
        day: response.data
      })
    })
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact path="/home"
            render={() => {
              return(
                <PigeonMap
                  day={this.state.day}
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
