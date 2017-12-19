import React, { Component } from "react"
import Map from "pigeon-maps"
import Marker from "pigeon-marker"

class PigeonMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: {},
      name: "",
      time: "",
      participants: []
    }
    this.onMarkerClick = this.onMarkerClick.bind(this)
  }

  onMarkerClick(e) {
    this.setState({
      name: e.payload[0],
      time: e.payload[2],
      participants: e.payload[1]
    })
}

  render() {
    var PigeonMarkers

    if (this.props.data.events) {
      PigeonMarkers = this.props.data.events.map(event => {
        return (
          <Marker
            key={`marker_${event.name}`}
            anchor={Object.values(event.position)}
            payload={[event.name, event.participants, event.time]}
            onClick={this.onMarkerClick}
          />
        )
      })
    }

    return (
      <div className="map">
        <Map
          width={800}
          height={600}
          defaultCenter={[38.9072, -77.0369]}
          defaultZoom={13}
        >
          {PigeonMarkers}
        </Map>
        <div>
          <h1>{this.state.name}</h1>
          <h3>{this.state.time}</h3>
          <p>{this.state.participants}</p>

        </div>
      </div>
    )
  }
}

export default PigeonMap
