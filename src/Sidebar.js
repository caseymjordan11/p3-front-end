import React, { Component } from "react"
import DatePicker from "react-datepicker"
import moment from "moment"
import axios from "axios"

import EventList from "./EventList"
import EventNew from "./EventNew"

import "react-datepicker/dist/react-datepicker.css"

class Sidebar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      date: moment(),
      list: false,
      events: []
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
          events: res.data.events
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
      <div>
        <DatePicker
          inline
          selected={this.state.date}
          onChange={this.handleChange}
        />
        {this.state.list ? (
          <EventList events={this.state.events} date={this.state.date} />
        ) : (
          <EventNew date={this.state.date} handleChange={this.handleChange} />
        )}
      </div>
    )
  }
}

export default Sidebar
