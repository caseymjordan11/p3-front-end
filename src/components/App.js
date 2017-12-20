import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"
import axios from "axios"
import DatePicker from "react-datepicker"
import moment from "moment"

import "./App.css"

import PigeonMap from "./PigeonMap"
import Sidebar from "./Sidebar"
import NavItem from "./NavItem"
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
    this.killOneEvent = this.killOneEvent.bind(this)
    this.editOneEvent = this.editOneEvent.bind(this)
  }

  handleChange(date) {
    let sendDate = `${date.month() + 1}-${date.date()}-${date.year()}`
    axios
      .get(`http://localhost:3001/api/${sendDate}`)
      .then(res => {
        console.log(res.data.events)
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

  makeNewEvent(name, description, position) {
    let sendDate = `${this.state.date.month() +
      1}-${this.state.date.date()}-${this.state.date.year()}`
    axios
      .post(`http://localhost:3001/api/${sendDate}/new-event`, {
        name: name,
        description: description,
        position: position
      })
      .then(res => {})
      .catch(err => {
        console.log(err)
      })
  }

  editOneEvent(name, description, position) {
    let sendDate = `${this.state.date.month() +
      1}-${this.state.date.date()}-${this.state.date.year()}`

    axios
      .put(
        `http://localhost:3001/api/${sendDate}/modify-event/${this.state
          .currentEvent._id}`,
        {
          name: name,
          description: description,
          position: position
        }
      )
      .then(res => {
        console.log(res)
        // this.handleChange(this.state.date)
        // this.forceUpdate()
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

  killOneEvent(e) {
    e.preventDefault()
    let sendDate = `${this.state.date.month() +
      1}-${this.state.date.date()}-${this.state.date.year()}`

    axios
      .delete(
        `http://localhost:3001/api/${sendDate}/remove-event/${this.state
          .currentEvent._id}`
      )
      .then(res => {})
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div>
        <NavItem />
        <div className="App-column">
          <div className="leftSide">
            <DatePicker
              inline
              selected={this.state.date}
              onChange={this.handleChange}
            />
            <div className="sidebar">
              <Sidebar
                makeNewEvent={this.makeNewEvent}
                editOneEvent={this.editOneEvent}
                data={this.state.data}
                currentEvent={this.state.currentEvent}
              />
            </div>
          </div>
          <div>
            <PigeonMap
              data={this.state.data}
              showOneEvent={this.showOneEvent}
            />
          </div>
        </div>
        <EventShow
          event={this.state.currentEvent}
          killOneEvent={this.killOneEvent}
        />
      </div>
    )
  }
}

export default App
