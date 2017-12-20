import React, { Component } from "react"
import Map from "pigeon-maps"
import Marker from "pigeon-marker"

class PigeonMap extends Component {
  constructor(props) {
    super(props)
    this.onMarkerClick = this.onMarkerClick.bind(this)
  }

  onMarkerClick(e) {
    this.props.showOneEvent(e.payload[0])
  }

  render() {
    var PigeonMarkers
    console.log(this.props.data)
    if (this.props.data) {
      PigeonMarkers = this.props.data.map(event => {
        return (
          <Marker
            key={`marker_${event.name}`}
            anchor={Object.values(event.position)}
            payload={[event]}
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
          zoomOnMouseWheel={false}
        >
          {PigeonMarkers}
        </Map>
      </div>
    )
  }
}

export default PigeonMap
