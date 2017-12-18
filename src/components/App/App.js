import React, { Component } from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import axios from "axios"
import moment from "moment"
import DatePicker from "react-datepicker"
import PigeonMap from "../PigeonMap/PigeonMap"
import Sidebar from "../../Sidebar"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      date: moment(),
      list: false,
      data: {}
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(date) {
    let fullDate = `${date.month() + 1}-${date.date()}-${date.year()}`
    axios
      .get(`http://localhost:3001/api/${fullDate}`)
      .then(res => {
        this.setState({
          date: date,
          list: true,
          data: res.data
        })
        console.log(res.data.events)
      })
      .catch(err => {
        this.setState({
          date: date,
          list: false
        })
        console.log("No Events Found")
      })
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/home"
            render={() => {
              return (
                <div>
                  <DatePicker
                    inline
                    selected={this.state.date}
                    onChange={this.handleChange}
                  />
                  <Sidebar
                    events={this.state.data.events}
                    handleChange={this.handleChange}
                  />
                  <PigeonMap data={this.state.data} />
                </div>
              )
            }}
          />
        </Switch>
      </Router>
    )
  }
}

export default App
