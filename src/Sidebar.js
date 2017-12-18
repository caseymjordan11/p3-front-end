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
        {this.props.list ? (
          <EventList events={this.props.events} date={this.props.date} />
        ) : (
          <EventNew
            date={this.props.date}
            handleChange={this.props.handleChange}
          />
        )}
      </div>
    )
  }
}

export default Sidebar
