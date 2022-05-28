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
      <IntroCards />
      <Footer />
    </header>
  );
}
