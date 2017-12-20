import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./EventShow.css"

class EventShow extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="body">
        <h3>{this.props.event.name}</h3>
        <p>{this.props.event.time}</p>
        <p>{this.props.event.description}</p>
        {this.props.event.name && (
          <div>
            <Link to="/modify-event">
              <button>Update</button>
            </Link>
            <form onSubmit={this.props.killOneEvent}>
              <button type="submit">Delete</button>
            </form>
          </div>
        )}
      </div>
    )
  }
}

export default EventShow
