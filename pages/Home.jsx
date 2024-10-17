import React from "react";
import "../src/styles.css";
import { Link } from "react-router-dom";
import About from "../components/About";
import Services from "../components/Services";
import WeAreSocial from "../components/WeAreSocial";

export default function Home() {
  return (
    <div id="Home">
      <div class="video-container">
        <iframe
          className="backgroundVideo"
          src="https://www.youtube.com/embed/oy4GD3muaE8?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&loop=1&playlist=oy4GD3muaE8"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>

        <div class="overlay"></div>
      </div>

      <div class="content">
        <h2 className="logo">Let's Hibachi</h2>
        <h1 className="topSlogan">Premium Hibachi at Your Doorstep</h1>
        <h1 className="secondSlogan">Book Your Hibachi Catering Now!</h1>
        <h3 className="bottomSlogan">& REMEMBER: #SAVORTHESIZZLE</h3>
        <Link className="book mobileBook homeScreenBook" to="/">
          BOOK NOW
        </Link>
      </div>

      <About />
      <Services />
      <WeAreSocial />
    </div>
  );
}
