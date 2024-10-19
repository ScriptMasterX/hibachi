import React, { useState } from "react";
import "../src/styles.css";
import { Link } from "react-router-dom";
import BookForm from "../components/BookForm";

export default function Book() {
  return (
    <div id="Locations">
      <div className="contactWrapper">
        <BookForm />
      </div>
    </div>
  );
}
