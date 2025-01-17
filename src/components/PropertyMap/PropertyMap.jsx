import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import { useState } from "react";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 12.9716,
  lng: 77.5946,
};

const PropertyMap = ({ location, icon }) => {
  const [map, setMap] = useState(null);

  const onLoad = (map) => {
    setMap(map);
  };

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location || center}
        zoom={10}
        onLoad={onLoad}
      >
        {location && <MarkerF position={location} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default PropertyMap;
