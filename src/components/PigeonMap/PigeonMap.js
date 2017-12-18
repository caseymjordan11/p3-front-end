import React, { Component } from 'react';
import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'

const markers = [
  {
    name: 'Kottbusser Tor',
    latlng: [38.9072, -77.0369]
  }
]


class PigeonMap extends Component {

  onMarkerClick(e) {
    console.log(e.payload)
  }

  render(){

    const PigeonMarkers = markers.map(marker => (
      <Marker key={`marker_${marker.name}`} anchor={marker.latlng} payload={marker.name} onClick={this.onMarkerClick} />
    ));

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
