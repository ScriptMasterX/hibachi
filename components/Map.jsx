import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const locations = [
  {
    city: "Phoenix",
    position: {
      lat: 33.4484,
      lng: -112.074,
    },
  },
  {
    city: "Scottsdale",
    position: {
      lat: 33.4942,
      lng: -111.9261,
    },
  },
  {
    city: "Avondale",
    position: {
      lat: 33.4356,
      lng: -112.3496,
    },
  },
  {
    city: "Mesa",
    position: {
      lat: 33.4151,
      lng: -111.8315,
    },
  },
  {
    city: "Gilbert",
    position: {
      lat: 33.3528,
      lng: -111.789,
    },
  },
  {
    city: "Chandler",
    position: {
      lat: 33.3062,
      lng: -111.8413,
    },
  },
  {
    city: "Tempe",
    position: {
      lat: 33.4255,
      lng: -111.94,
    },
  },
  {
    city: "Queen Creek",
    position: {
      lat: 33.2507,
      lng: -111.6343,
    },
  },
  {
    city: "Surprise",
    position: {
      lat: 33.6295,
      lng: -112.367,
    },
  },
  {
    city: "Buckeye",
    position: {
      lat: 33.3719,
      lng: -112.5834,
    },
  },
  {
    city: "Cave Creek",
    position: {
      lat: 33.8262,
      lng: -111.9634,
    },
  },
  {
    city: "Peoria",
    position: {
      lat: 33.5806,
      lng: -112.2374,
    },
  },
  {
    city: "Fountain Hills",
    position: {
      lat: 33.617,
      lng: -111.7203,
    },
  },
  {
    city: "Paradise Valley",
    position: {
      lat: 33.5374,
      lng: -111.9604,
    },
  },
  {
    city: "Goodyear",
    position: {
      lat: 33.4355,
      lng: -112.3584,
    },
  },
];

const containerStyle = {
  width: "100%",
  height: "700px",
};

const center = {
  lat: 33.4484, // Center of Phoenix
  lng: -112.074,
};

const MapComponent = () => (
  <LoadScript googleMapsApiKey="AIzaSyBNE8lNOfAC23hLxoPDnEzUkRqmMnzkUVA">
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
      {locations.map((location) => (
        <Marker
          key={location.city}
          position={location.position}
          title={location.city}
        />
      ))}
    </GoogleMap>
  </LoadScript>
);

export default MapComponent;
