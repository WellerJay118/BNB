import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const options = {
    disableDefaultUI: true,
    zoomControl: true,
  }


  const Maps = ({ apiKey, spots }) => {
    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: apiKey,
    });

    const center = {
      lat: parseFloat(spots?.lat),
      lng: parseFloat(spots?.lng),
    };



  return (
    <>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          options={options}
        >
          <Marker
            position={center}
            >
          </Marker>
        </GoogleMap>
      )}
    </>
  );
};

export default React.memo(Maps);
