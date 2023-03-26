import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "300px",
  height: "300px",
};
const center = {
  lat: 40.210049268371776,
  lng: -3.5791675846561755,
};

function Mapa() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCnbeHg3yNpNDlAlNcHekURAj5d1DyXvko",
  });

  const [map, setMap] = React.useState(null);

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
      {/* Child components, such as markers, info windows, etc. */}
      <>
        <Marker position={center} />
      </>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Mapa);
