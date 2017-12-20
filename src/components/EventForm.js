import React, { Component } from "react"
import axios from "axios"
import Geocode from "./Geocode"

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
        name: this.props.event.name,
        description: this.props.event.description,
        time: this.props.event.time,
        participants: this.props.event.participants
      })
    }
    console.log(this.props.event)
  }

  render() {
    return (
      <div>
        <h4>Create an Event</h4>
        <form
          onSubmit={e => {
            e.preventDefault()
            this.props.toggleFalse()
            this.props.handleForm(
              this.state.name,
              this.state.description,
              this.props.position
            )
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
