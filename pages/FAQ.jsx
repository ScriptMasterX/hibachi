import React, { useState } from "react";
import "../src/styles.css";
import { Link } from "react-router-dom";
import Accordion from "../components/Accordion";

export default function FAQ() {
  return (
    <div id="Locations">
      <div className="topLocationSectionWrapper">
        <div className="routeWrapper">
          <Link to="/">Home</Link>
          <h1>&gt;</h1>
          <h1>FAQ</h1>
        </div>
        <div>
          <h1 className="locationsTitle">Frequently Asked Questions</h1>
        </div>
      </div>
      <div className="FAQWrapper">
        <Accordion />
      </div>
    </div>
  );
}
