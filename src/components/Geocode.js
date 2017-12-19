import React, { Component } from "react"
import axios from "axios"

class Geocode extends Component {
  constructor() {
    super()
    this.state = {
      address: "",
      street: "",
      city: "",
      state: "",
      zipcode: "",
      lat: "",
      lng: ""
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
        // this.setState({
        // lat: response["data"]["results"]["0"]["geometry"]["location"]["lat"],
        // lng: response["data"]["results"]["0"]["geometry"]["location"]["lng"]
        // })
        this.props.updatePosition(
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
        <h2>Search:</h2>
        <form onSubmit={e => this.handleSubmit(e)}>
          <p>Search Stock</p>
          <p>
            <label>Street Address:</label>
            <textarea onChange={e => this.handleStreetInput(e)} />
            <label>City:</label>
            <textarea onChange={e => this.handleCityInput(e)} />
            <label>State:</label>
            <textarea onChange={e => this.handleStateInput(e)} />
            <label>Zipcode:</label>
            <textarea onChange={e => this.handleZipcodeInput(e)} />
          </p>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Geocode
