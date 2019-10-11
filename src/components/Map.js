import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
  
const Map = withScriptjs(withGoogleMap(props =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{lat: 51.5049375, lng: -0.0964509}}
    >
        <Marker
        position={{lat: 51.5049375, lng: -0.0964509}}
        />
        <Marker
        position={{ lat: 51.51043109696697, lng: 0.08357541025041816 }}
        />
        <Marker
        position={{ lat: 51.499809635231756, lng: 0.10847983225981246 }}
        />
    </GoogleMap>
));
  


 export default Map;