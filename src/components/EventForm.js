import React, { Component } from "react"
import axios from "axios"
import Geocode from "./Geocode"
import "./EventShow.css"

class EventForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "name",
      description: "description",
      time: "time",
      participants: []
    }

    this.updateName = this.updateName.bind(this)
    this.updateDescription = this.updateDescription.bind(this)
  }

  updateName(e) {
    this.setState({
      name: e.target.value
    })
  }

  updateDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  componentWillMount() {
    if (this.props.updateForm === true) {
      this.setState({
        name: this.props.currentEvent.name,
        description: this.props.currentEvent.description,
        time: this.props.currentEvent.time,
        participants: this.props.currentEvent.participants
      })
    }
  }

  render() {
    return (
      <div>
        <h4>Create an Event</h4>
        <form
          onSubmit={e => {
            e.preventDefault()
            this.props.toggleFalse()

            if(!this.props.updateForm) {
              this.props.newEvent(
                this.state.name,
                this.state.description,
                this.props.position
              )
            } else {
              this.props.editEvent(
                this.state.name,
                this.state.description,
                this.props.position
              )
            }
          }}
        >
          <p>
            <input
              type="text"
              name="name"
              defaultValue={this.state.name}
              onChange={this.updateName}
            />
          </p>
          <p>
            <input
              type="text"
              name="description"
              defaultValue={this.state.description}
              onChange={this.updateDescription}
            />
          </p>
          <p>
            <input type="text" name="time" defaultValue={this.state.time} />
          </p>
          <p>
            <input type="submit" value="Submit" />
          </p>
        </form>
      </div>
    )
  }
}

export default EventForm
