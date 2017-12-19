import React, { Component } from "react"
import EventList from "./EventList"
import EventNew from "./EventNew"
import { Route } from "react-router-dom"

import "react-datepicker/dist/react-datepicker.css"

class Sidebar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Route
          path="/new-event"
          render={props => {
            return (
              <EventNew
                handleChange={this.props.handleChange}
                makeNewEvent={this.props.makeNewEvent}
              />
            )
          }}
        />
        <Route
          path="/home"
          render={props => {
            return <EventList events={this.props.data} />
          }}
        />
      </div>
    )
  }
}

export default Sidebar
