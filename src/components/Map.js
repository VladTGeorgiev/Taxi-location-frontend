import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
  
const Map = withScriptjs(withGoogleMap(props =>

    <GoogleMap
        defaultZoom={8}
        defaultCenter={{lat: 51.5049375, lng: -0.0964509}}
    >
        {props.drivers.map(driver => (
            <Marker
            position={{ lat: driver.location.latitude, lng: driver.location.longitude }}
            key={driver.driver_id}
            />
        ))}
    </GoogleMap>
));

export default Map;