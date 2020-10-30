import React from "react";
import AppConfig from "./App.config";
import GoogleMapReact from "google-map-react";

const GoogleMapComponents = () => {
  const lat = 23.810331;
  const lng = 90.412521;

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: AppConfig.GOOGLE.GAPI_KEY }}
        defaultCenter={{
          lat: lat,
          lng: lng,
        }}
        defaultZoom={13}
      ></GoogleMapReact>
    </div>
  );
};

export default GoogleMapComponents;
