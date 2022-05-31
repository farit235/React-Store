import React from "react";
import Header from "../components/Header";
import IntroHome from "../components/IntroHome";
import Footer from "../components/Footer";
import IntroCards from "../components/IntroCards";

export default function Home() {
  return (
    <header className="home">
      <Header />
      <IntroHome
        name="iPhone 13"
        image="./images/intro-iph-13.png"
        alt="iphone 13 image"
        text="Oh. So. Pro."
        price="From $24.95/mo. or $599 with trade-in."
        button="Learn more >"
        link="/iphone"
      />
      <IntroHome
        name="iPhone SE"
        image="./images/intro-iph-se.png"
        alt="iphone SE image"
        text="Love the power. Love the price."
        price="From $14.95/mo. or $299 with trade-in."
        button="Learn more >"
        link="/iphone"
      />
      <IntroHome
        name="Watch Series 7"
        image="./images/intro-w-s7.jpeg"
        alt="Apple Watch S7 image"
        text="It's our largest display yet."
        price="From $14.95/mo. or $199 with trade-in."
        button="Learn more >"
        link="/shop"
      />

      {/* for desktops */}
      <div className="home-intro-cards">
        <IntroCards />
      </div>

      {/* for mobile */}
      <div className="home-intro-cards-mobile">
        <IntroHome
          name="Card"
          image="./images/intro-card.jpeg"
          alt="Apple Card image"
          text="Get up to 3% Daily Cash Back with every purchase."
          button="Learn more >"
          link="/contact"
        />
        <IntroHome
          name="Studio Display"
          image="./images/intro-st-disp.jpeg"
          alt="Apple Studio Display image"
          text="A sight to be bold."
          button="Learn more >"
          link="/mac"
        />
        <IntroHome
          name="Enjoy great savings."
          image="./images/intro-shop.jpeg"
          alt="Apple Shop image"
          text="Benefit from incredibly saving."
          button="Shop now >"
          link="/shop"
        />
        <IntroHome
          name="iPad Air."
          image="./images/intro-ipad.jpeg"
          alt="Apple iPad image"
          text="Light. Bright. Full of might."
          button="Learn more >"
          link="/ipad"
        />
      </div>

      <Footer />
    </header>
  );
}
