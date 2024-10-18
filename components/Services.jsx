import React from "react";
import { Link } from "react-router-dom";
import "../src/styles.css";

export default function Services() {
  return (
    <div id="Services">
      <h1 className="serviceTitle">How It Works</h1>
      <h1 className="serviceBigTagline">
        Hibachi Grill and Chef, Right in Your Backyard!
      </h1>
      <h1 className="serviceSmallTagline">
        Just grab some tables and chairs, and we’ll take care of the rest!
        Everyone gets a side salad, hibachi veggies, fried rice, and two
        proteins of their choice.
      </h1>
      <div className="serviceBoxesWrapper">
        <div className="serviceBox">
          <img src={"/dollar.png"} height="90px" width="90px" />
          <h1>Pricing</h1>
          <p className="serviceNormalFont">
            $50.00 Per person / $500 Minimum for all parties*
          </p>
          <p className="serviceNormalFont">$25.00 Per child 12 and under</p>
          <p className="serviceFontSpecial">We cook outside only.</p>
          <p className="serviceFontSmall">
            We&apos;re here rain or shine, as long as there&apos;s a dry spot for the chef
            to cook
          </p>
        </div>
        <div className="serviceBox">
          <img src={"/utensils.png"} height="90px" width="90px" />
          <h1>Protein Choices</h1>
          <p className="serviceNormalFont marginBottom20">2 Per Person</p>
          <p className="serviceNormalFont">
            Chicken · Steak · Shrimp · Scallops · Salmon · Tofu
          </p>
          <p className="serviceNormalFont marginBottom20">
            Upgrade proteins: · Filet Mignon $5 · Lobster $10
          </p>
          <p className="serviceFontSmall">
            Includes Salad, Fried Rice, and Vegetables
          </p>
          <p className="serviceFontSmall">
            *3rd Protein $10 · Filet $15 · Lobster $20
          </p>
          <p className="serviceFontSmall">NOODLES AVALIABLE 4$ PER ORDER</p>
        </div>
      </div>
    </div>
  );
}
