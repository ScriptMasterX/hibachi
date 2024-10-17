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
        <img src={"/public/gallery1.png"} />
        <img src={"/public/gallery2.png"} />
        <img src={"/public/gallery3.png"} />
        <img src={"/public/gallery4.png"} />
        <img src={"/public/gallery5.png"} />
        <img src={"/public/gallery6.png"} />
        <img src={"/public/gallery7.png"} />
        <img src={"/public/gallery8.png"} />
      </div>
    </div>
  );
}
