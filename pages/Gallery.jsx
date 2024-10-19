import React, { useState } from "react";
import "../src/styles.css";
import { Link } from "react-router-dom";

export default function Gallery() {
  return (
    <div id="Locations">
      <div className="topLocationSectionWrapper">
        <div className="routeWrapper">
          <Link to="/">Home</Link>
          <h1>&gt;</h1>
          <h1>Gallery</h1>
        </div>
        <div>
          <h1 className="locationsTitle">Gallery</h1>
        </div>
      </div>
      <div className="galleryWrapper">
        <img src={"/gallery1.png"} />
        <img src={"/gallery2.png"} />
        <img src={"/gallery3.png"} />
        <img src={"/gallery4.png"} />
        <img src={"/gallery5.png"} />
        <img src={"/gallery6.png"} />
        <img src={"/gallery7.png"} />
        <img src={"/gallery8.png"} />
      </div>
    </div>
  );
}
