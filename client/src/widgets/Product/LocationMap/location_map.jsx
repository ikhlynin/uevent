import React from 'react';
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

import "./style.css"

const LocationMap = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.MAPS_KEY,
    });

    if (!isLoaded)
        return (
            <div>
                <p className='event_opened_map_loading'>Завантаження карти...</p>
            </div>
        )
    else
        return (
            <div>
                <GoogleMap
                    zoom={10}
                    center={{ lat: 49.986909, lng: 36.381207 }}
                    mapContainerClassName='event_opened_map_container'>
                    <MarkerF position={{ lat: 49.986909, lng: 36.381207 }} />
                </GoogleMap>
            </div>
        )
}
export default LocationMap;
