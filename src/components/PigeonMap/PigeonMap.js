import React, { Component } from 'react';
import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'

class PigeonMap extends Component {
  constructor(props) {
    super(props)
    this.state={
      events: {}
  }}

  onMarkerClick(e) {
    console.log(e.payload)
  }

  render(){
    var PigeonMarkers

    if (this.props.day.events){
      PigeonMarkers = this.props.day.events.map((event) => {
        console.log(Object.values(event.position))
        return(
              <Marker
                key={`marker_${event.name}`}
                anchor={Object.values(event.position)}
                payload={event.name}
                onClick={this.onMarkerClick}
              />
      )})
    }


    return(
      <div className="map">
       <Map
         width={window.innerWidth}
         height={600}
         defaultCenter={[38.9072, -77.0369]}
         defaultZoom={13}
       >
       {PigeonMarkers}
       </Map>
     </div>
    )
  }

}

export default PigeonMap
