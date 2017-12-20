import React, { Component } from "react"
import EventList from "./EventList"
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

  render() {
    return (
      <div>
        <Switch>
          <Route
            path="/modify-event"
            render={props => {
              return (
                <EventForm
                  updateForm={true}
                  editEvent={this.props.editOneEvent}
                  toggleFalse={this.toggleFalse}
                  currentEvent={this.props.currentEvent}
                />
              )
            }}
          />
          <Route
            path="/new-event"
            render={props => {
              return !this.state.location ? (
                <Geocode setLocation={this.setLocation} />
              ) : (
                <EventForm
                  updateForm={false}
                  position={this.state.position}
                  newEvent={this.props.makeNewEvent}
                  toggleFalse={this.toggleFalse}
                />
              )
            }}
          />
          <Route
            path="/"
            render={props => {
              return <EventList {...props} events={this.props.data} />
            }}
          />
        </Switch>
      </div>
    )
  }
}

export default Sidebar
