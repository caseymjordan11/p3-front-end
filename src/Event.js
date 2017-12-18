import React, { Component } from "react"

class Event extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <div className="Event">{this.props.event.name}</div>
  }
}

export default Event
