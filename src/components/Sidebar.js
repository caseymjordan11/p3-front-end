import React, { Component } from "react"
import EventList from "./EventList"
import EventNew from "./EventNew"

import "react-datepicker/dist/react-datepicker.css"

class Sidebar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {this.props.data ? (
          <EventList events={this.props.data.events} />
        ) : (
          <EventNew
            handleChange={this.props.handleChange}
            makeNewEvent={this.props.makeNewEvent}
          />
        )}
      </div>
    )
  }
}

export default Sidebar
