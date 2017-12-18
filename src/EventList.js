import React, { Component } from "react"
import Event from "./Event"

class EventList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="EventList">
        {this.props.events.map((event, key) => (
          <Event key={key} event={event} />
        ))}
      </div>
    )
  }
}

export default EventList
