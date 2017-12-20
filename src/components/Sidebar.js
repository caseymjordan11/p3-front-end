import React, { Component } from "react"

import EventForm from "./EventForm"
import { Switch, Route } from "react-router-dom"
import Geocode from "./Geocode"

import "react-datepicker/dist/react-datepicker.css"

class Sidebar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      location: false,
      position: {
        lat: "",
        lng: ""
      }
    }
    this.setLocation = this.setLocation.bind(this)
    this.toggleFalse = this.toggleFalse.bind(this)
  }

  setLocation(lat, lng) {
    this.setState({
      location: true,
      position: {
        lat: lat,
        lng: lng
      }
    })
  }

  toggleFalse() {
    this.setState({
      location: false
    })
  }

  componentWillMount() {
    if (this.props.currentEvent.position) {
      this.setLocation(this.props.currentEvent.lat, this.props.currentEvent.lng)
    }
  }

  render() {
    return (
      <div>
        <h4>{this.state.updateForm ? "Update Event" : "Create Event"}</h4>
        <Switch>
          <Route
            path="/modify-event"
            render={props => {
              return (
                <EventForm
                  updateForm={true}
                  position={this.state.position}
                  handleForm={this.props.editOneEvent}
                  toggleFalse={this.toggleFalse}
                  currentEvent={this.props.currentEvent}
                />
              )
            }}
          />
          <Route
            path="/"
            render={props => {
              return !this.state.location ? (
                <Geocode setLocation={this.setLocation} />
              ) : (
                <EventForm
                  updateForm={false}
                  position={this.state.position}
                  handleForm={this.props.makeNewEvent}
                  toggleFalse={this.toggleFalse}
                />
              )
            }}
          />
        </Switch>
      </div>
    )
  }
}

export default Sidebar
