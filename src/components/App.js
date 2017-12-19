import React, { Component } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import axios from "axios"
import DatePicker from "react-datepicker"
import moment from "moment"

import "./App.css"

import PigeonMap from "./PigeonMap"
import Sidebar from "./Sidebar"
import NavItem from "./NavItem"
import Geocode from "./Geocode"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      date: moment(),
      data: []
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(date) {
    let sendDate = `${date.month() + 1}-${date.date()}-${date.year()}`
    axios
      .get(`http://localhost:3001/api/${sendDate}`)
      .then(res => {
        this.setState({
          date: date,
          data: res.data.events
        })
      })
      .catch(err => {
        this.setState({
          date: date,
          data: []
        })
      })
  }

  makeNewEvent(e, name, description) {
    e.preventDefault()

    let sendDate = `${this.state.date.month() +
      1}-${this.state.date.date()}-${this.state.date.year()}`
    axios
      .post(`http://localhost:3001/api/${sendDate}/new-event`, {
        name: name,
        description: description
        // time: this.state.time
      })
      .then(res => {
        console.log(res.data.events)
        this.props.handleChange(this.props.date)
      })
      .catch(err => {
        console.log(err)
      })
  }

  showEventDetails(event) {}

  render() {
    return (
      <Router>
        <Switch>
          <div>
            <NavItem />
            <div className="App-column">
              <div>
                <DatePicker
                  inline
                  selected={this.state.date}
                  onChange={this.handleChange}
                />
                <Sidebar
                  list={this.state.list}
                  handleChange={this.handleChange}
                  makeNewEvent={this.makeNewEvent}
                  data={this.state.data}
                />
              </div>
              <PigeonMap data={this.state.data} />
              <Geocode />
            </div>
          </div>
          ) }}
        </Switch>
      </Router>
    )
  }
}

export default App
