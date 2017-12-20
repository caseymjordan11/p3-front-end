import React, { Component } from "react"
import axios from "axios"
import Geocode from "./Geocode"
import "./EventShow.css"

class EventForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      description: "",
      time: "",
      participants: [],
      position: {
        lat: "",
        lng: ""
      }
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
        participants: this.props.currentEvent.participants,
        position: { ...this.props.currentEvent.position }
      })
    }
    console.log(this.props.currentEvent)
  }

  render() {
    return (
      <div>
        <h4> Details </h4>
        <form
          onSubmit={e => {
            e.preventDefault()
            this.props.toggleFalse()
            this.props.handleForm(
              this.state.name,
              this.state.description,
              this.props.updateForm ? this.state.position : this.props.position
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
