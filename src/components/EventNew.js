import React, { Component } from "react"
import axios from "axios"
import Geocode from "./Geocode"

class EventNew extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      description: "",
      time: "",
      position: {
        lat: "",
        lng: ""
      },
      participants: []
    }

    this.updateName = this.updateName.bind(this)
    this.updateDescription = this.updateDescription.bind(this)
    this.updatePosition = this.updatePosition.bind(this)
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

  updatePosition(lat, lng) {
    this.setState({
      position: {
        lat: lat,
        lng: lng
      }
    })
    console.log(this.state.position)
  }

  render() {
    return (
      <div>
        <h4>Create an Event</h4>
        <form
          onSubmit={e =>
            this.props.makeNewEvent(
              this.state.name,
              this.state.description,
              this.state.position
            )}
        >
          <p>
            <input
              type="text"
              name="name"
              placeholder="name"
              onChange={this.updateName}
            />
          </p>
          <p>
            <input
              type="text"
              name="description"
              placeholder="description"
              onChange={this.updateDescription}
            />
          </p>
          <p>
            <input type="text" name="time" placeholder="time" />
          </p>
          <p>
            <input type="submit" value="Submit" />
          </p>
        </form>
        <Geocode updatePosition={this.updatePosition} />
      </div>
    )
  }
}

export default EventNew
