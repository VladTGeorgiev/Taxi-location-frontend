import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
  
const Map = withScriptjs(withGoogleMap(props =>

    <GoogleMap
        defaultZoom={14}
        defaultCenter={props.defaultPosition}
    >
        <Marker
            position={props.defaultPosition}
            icon={{url: 'http://maps.google.com/mapfiles/ms/icons/purple-dot.png'}}
        />
        {props.drivers === null ? null : props.drivers.map(driver => (
            <Marker
                position={{ lat: driver.location.latitude, lng: driver.location.longitude }}
                icon={{url: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'}}
                key={driver.driver_id}
            />
        ))}
    </GoogleMap>
));

export default Map;