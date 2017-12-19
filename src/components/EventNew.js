import React, { Component } from "react"
import axios from "axios"

class EventNew extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      description: "",
      time: ""
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

  render() {
    return (
      <div>
        <h4>Create an Event</h4>
        <form
          onSubmit={e =>
            this.props.makeNewEvent(this.state.name, this.state.description)}
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
      </div>
    )
  }
}

export default EventNew
