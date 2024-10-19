import React from "react";
import "../src/styles.css";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [dropState, setDropState] = React.useState(false);

  React.useEffect(() => {
    if (dropState) {
      document.querySelector("html").style.overflowY = "hidden";
    } else {
      document.querySelector("html").style.overflowY = "visible";
    }
  }, [dropState]);

  const active = {
    borderBottom: "5px solid #006241",
  };
  const slideStyles = {
    transition: dropState
      ? "transform .2s ease-out, visibility 0s"
      : "transform .2s ease-out, visibility .2s",
    visibility: dropState ? "visible" : "hidden",
    transform: dropState ? "translateX(0%)" : "translateX(100%)",
  };
  const darkOverlayStyles = {
    opacity: dropState ? "1" : "0",
    zIndex: dropState ? "0" : "-1000",
    pointerEvents: dropState ? "auto" : "none",
  };
  return (
    <header id="navigationBar">
      <Link to="/" className="logo">
        Lets Hibachi
      </Link>
      <div className="extraLinks">
        <Link to="locations">LOCATIONS</Link>
        <Link to="gallery">GALLERY</Link>
        <Link to="faq">FAQ</Link>
        <Link to="contact">CONTACT</Link>
        <Link className="book" to="book">
          BOOK NOW
        </Link>
      </div>

      <a
        href="#navigationBar"
        className="hamburger"
        onClick={() => {
          setDropState((prevState) => !prevState);
        }}
      >
        <img src={"/hamburger2.png"} height="50px" width="50px" />
      </a>
      <div
        className="darkOverlay"
        onClick={() => {
          setDropState((prevState) => !prevState);
        }}
        style={darkOverlayStyles}
      ></div>
      <ul style={slideStyles} className="navbarSlide">
        <li>
          <Link
            to="locations"
            onClick={() => {
              setDropState((prevState) => !prevState);
            }}
          >
            Locations
          </Link>
        </li>
        <li>
          <Link
            to="gallery"
            onClick={() => {
              setDropState((prevState) => !prevState);
            }}
          >
            Gallery
          </Link>
        </li>
        <li>
          <Link
            to="faq"
            onClick={() => {
              setDropState((prevState) => !prevState);
            }}
          >
            FAQ
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            onClick={() => {
              setDropState((prevState) => !prevState);
            }}
          >
            Contact Us
          </Link>
        </li>
        <hr />
        <Link className="book mobileBook" to="book">
          BOOK NOW
        </Link>
      </ul>
    </header>
  );
}
