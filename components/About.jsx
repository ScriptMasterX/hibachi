import React from "react";
import "../src/styles.css";

export default function About() {
  return (
    <div id="about">
      <h1 className="aboutTitle">About Us</h1>
      <div className="aboutContentWrapper">
        <div className="paragraphs">
          <p>
            Let’s Hibachi brings the thrill of a premium hibachi experience
            right to your doorstep. Our highly skilled chefs, with years of
            expertise, deliver not only mouthwatering dishes but also an
            unforgettable performance that will leave your guests entertained
            and delighted.
          </p>
          <p>
            We’re more than just food; Let’s Hibachi is about creating memorable
            moments for all types of gatherings—from birthday parties and
            weddings to corporate events and intimate dinners. Picture the
            flames, the fun, and the fresh flavors—all from the comfort of your
            own home or backyard.
          </p>
          <p>Experience the magic of hibachi with us today!</p>
        </div>
        <div className="imagesWrapper">
          <img className="aboutPicture" src={"/public/hibachiAbout.png"} />
          <img className="aboutPicture2" src={"/public/hibachiAbout2.png"} />
        </div>
      </div>
    </div>
  );
}
