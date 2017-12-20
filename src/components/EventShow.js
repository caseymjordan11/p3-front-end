import React, { Component } from "react"
import Event from "./Event"
import { Link } from "react-router-dom"

class EventShow extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h3>{this.props.event.name}</h3>
        <p>{this.props.event.time}</p>
        <p>{this.props.event.description}</p>
        <form onSubmit={this.props.killOneEvent}>
          <button type="submit">Delete</button>
        </form>
      </div>
    )
  }
}

export default EventShow
