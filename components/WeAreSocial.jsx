import React from "react";
import { Link } from "react-router-dom";
import "../src/styles.css";

export default function WeAreSocial() {
  return (
    <div id="Social">
      <h1>WE ARE SOCIAL</h1>
      <div className="socialVideosWrapper">
        <video className="video vid1" controls autoplay muted playsinline>
          <source src="/hibvid1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video className="video" controls autoplay muted playsinline>
          <source src="/hibvid2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video className="video" controls autoplay muted playsinline>
          <source src="/hibvid3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video className="video" controls autoplay muted playsinline>
          <source src="/hibvid4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
