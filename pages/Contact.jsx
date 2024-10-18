import React, { useState } from "react";
import "../src/styles.css";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div id="Locations">
      <div className="contactWrapper">
        <ContactForm />
      </div>
    </div>
  );
}
