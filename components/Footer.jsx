import React from "react";
import { Link } from "react-router-dom";
import "../src/styles.css";

export default function Footer() {
  return (
    <footer>
      <div>
        <div>
          <Link className="logo footerLogo">Let's Hibachi</Link>
          <div className="socialsWrapper">
            <img className="facebook" src={"/facebook.png"} />
            <img src={"/twitter.png"} />
            <img src={"/tiktok.png"} />
          </div>
        </div>
        <div className="footerNavigation">
          <h1>Navigation</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="locations">Locations</Link>
            </li>
            <li>
              <Link to="gallery">Gallery</Link>
            </li>
            <li>
              <Link to="faq">FAQ</Link>
            </li>
            <li>
              <Link to="contact">CONTACT</Link>
            </li>
          </ul>
        </div>
        <div className="textOrCall">
          <h1>Text or Call Us</h1>
          <a href="tel:+12345678901" className="phoneNumber">
            <img
              src={"/phone.png"}
              className="phoneIcon"
              alt="Phone Icon"
            />
            <p>+1 (123) 456-7890</p>
          </a>
        </div>
      </div>
      <h1 className="copyright">© 2024 Lets Hibachi | Website by Daniel </h1>
    </footer>
  );
}
