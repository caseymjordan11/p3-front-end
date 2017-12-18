import React, { Component } from 'react';
import Map from 'pigeon-maps'



class PigeonMap extends Component {

  render(){
    return(
      <div className="map">
       <Map
         width={window.innerWidth}
         height={600}
         defaultCenter={[38.9072, -77.0369]}
         defaultZoom={13}
       >
       </Map>
     </div>
    )
  }

}

export default PigeonMap
