import React, { Component } from "react"
import axios from "axios"
import TimePicker from "react-dropdown-timepicker"

class EventNew extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      description: "",
      time: ""
    }

    this.makeNewEvent = this.makeNewEvent.bind(this)
    this.updateName = this.updateName.bind(this)
    this.updateDescription = this.updateDescription.bind(this)
  }

  makeNewEvent(e) {
    e.preventDefault()

    let fullDate = `${this.props.date.month() +
      1}-${this.props.date.date()}-${this.props.date.year()}`
    axios
      .post(`http://localhost:3001/api/${fullDate}/new-event`, {
        name: this.state.name,
        description: this.state.description,
        time: this.state.time
      })
      .then(res => {
        console.log(res.data.events)
        this.props.handleChange(this.props.date)
      })
      .catch(err => {
        console.log(err)
      })
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
        <form onSubmit={this.makeNewEvent}>
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
