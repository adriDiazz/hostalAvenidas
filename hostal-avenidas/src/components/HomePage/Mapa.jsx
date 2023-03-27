import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import style from "./Mapa.module.css";

const containerStyle = {
  width: "400px",
  height: "400px",
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

  return isLoaded ? (
    <GoogleMap
      // mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      mapContainerClassName={style.map}
    >
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
