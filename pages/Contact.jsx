import React, { useState } from "react";
import "../src/styles.css";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";

export default function Gallery() {
  return (
    <div id="Locations">
      <div className="topLocationSectionWrapper">
        <div className="routeWrapper">
          <Link to="/">Home</Link>
          <h1>&gt;</h1>
          <h1>Contact</h1>
        </div>
        <div>
          <h1 className="locationsTitle">Contact</h1>
        </div>
      </div>
      <div className="contactWrapper">
        <ContactForm />
      </div>
    </div>
  );
}
