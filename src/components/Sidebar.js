import React, { Component } from "react"
import EventList from "./EventList"
import EventNew from "./EventNew"
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

  render() {
    return (
      <div>
        <Switch>
          <Route
            path="/new-event"
            render={props => {
              return !this.state.location ? (
                <Geocode setLocation={this.setLocation} />
              ) : (
                <EventNew
                  position={this.state.position}
                  handleChange={this.props.handleChange}
                  makeNewEvent={this.props.makeNewEvent}
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
