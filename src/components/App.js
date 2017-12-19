import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"
import axios from "axios"
import DatePicker from "react-datepicker"
import moment from "moment"

import "./App.css"

import PigeonMap from "./PigeonMap"
import Sidebar from "./Sidebar"
import NavItem from "./NavItem"
import Geocode from "./Geocode"
import EventShow from "./EventShow"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      date: moment(),
      data: [],
      currentEvent: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.makeNewEvent = this.makeNewEvent.bind(this)
    this.showOneEvent = this.showOneEvent.bind(this)
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

  showOneEvent(event) {
    this.setState({
      currentEvent: event
    })
  }

  render() {
    return (
<<<<<<< HEAD
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
            <div>
              <PigeonMap
                data={this.state.data}
                showOneEvent={this.showOneEvent}
              />
              <EventShow event={this.state.currentEvent} />
=======
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
>>>>>>> cb01c3b3c6e1975fcc9e9f530d26fcaf10789460
            </div>
          </div>
        </div>
        ) }}
      </Switch>
    )
  }
}

export default App
