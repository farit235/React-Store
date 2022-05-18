import React from "react";
import IntroHome from "./IntroHome";

export default function IntroCards() {
  return (
    <div className="intro-cards">
      <IntroHome
        name="Card"
        image="./images/intro-card.jpeg"
        alt="Apple Card image"
        text="Get up to 3% Daily Cash Back with every purchase."
        button="Learn more >"
      />
      <IntroHome
        name="Studio Display"
        image="./images/intro-st-disp.jpeg"
        alt="Apple Studio Display image"
        text="A sight to be bold."
        button="Learn more >"
      />
      <IntroHome
        name="Enjoy great savings."
        image="./images/intro-shop.jpeg"
        alt="Apple Shop image"
        text="Benefit from incredibly saving."
        button="Shop now >"
      />
      <IntroHome
        name="iPad Air."
        image="./images/intro-ipad.jpeg"
        alt="Apple iPad image"
        text="Light. Bright. Full of might."
        button="Learn more >"
      />
    </div>
  );
}
