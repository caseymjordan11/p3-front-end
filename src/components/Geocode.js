import React, { Component } from "react"
import axios from "axios"

class Geocode extends Component {
  constructor() {
    super()
    this.state = {
      street: "",
      city: "",
      state: "",
      zipcode: ""
    }
  }

  handleStreetInput(e) {
    this.setState({
      street: e.target.value
    })
  }

  handleCityInput(e) {
    this.setState({
      city: e.target.value
    })
  }

  handleStateInput(e) {
    this.setState({
      state: e.target.value
    })
  }

  handleZipcodeInput(e) {
    this.setState({
      zipcode: e.target.value
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
  }

  handleSubmit(e) {
    e.preventDefault()

    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${this.state
          .street},${this.state.city},${this.state.state},${this.state
          .zipcode}&key=AIzaSyCBmRKMME2_cxueT5MwzaHTawrMSAM7z1o`,
        {}
      )
      .then(response => {
        this.props.setLocation(
          response["data"]["results"]["0"]["geometry"]["location"]["lat"],
          response["data"]["results"]["0"]["geometry"]["location"]["lng"]
        )
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div>
        <h4> Set Location </h4>
        <form onSubmit={e => this.handleSubmit(e)}>
          <p>
            <input
              type="text"
              placeholder="address"
              onChange={e => this.handleStreetInput(e)}
            />
          </p>
          <p>
            <input
              type="text"
              placeholder="city"
              onChange={e => this.handleCityInput(e)}
            />
          </p>
          <p>
            <input
              type="text"
              placeholder="state"
              onChange={e => this.handleStateInput(e)}
            />
          </p>
          <p>
            <input
              type="text"
              placeholder="zipcode"
              onChange={e => this.handleZipcodeInput(e)}
            />
          </p>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Geocode
