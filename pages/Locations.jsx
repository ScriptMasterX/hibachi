import React, { useState } from "react";
import "../src/styles.css";
import { Link } from "react-router-dom";
import Map from "../components/Map";

export default function Locations() {
  return (
    <div id="Locations">
      <div className="topLocationSectionWrapper">
        <div className="routeWrapper">
          <Link to="/">Home</Link>
          <h1>&gt;</h1>
          <h1>Locations</h1>
        </div>
        <div>
          <h1 className="locationsTitle">Locations We Serve</h1>
        </div>
      </div>
      <Map />
    </div>
  );
}
