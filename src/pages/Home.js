import React from "react";
import Header from "../components/Header";
import IntroHome from "../components/IntroHome";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <header>
      <Header />
      <IntroHome
        name="iPhone 13"
        image="./images/intro-iph-13.png"
        alt="iphone 13 image"
        text="Oh. So. Pro."
        price="From $24.95/mo. or $599 with trade-in."
      />

      <IntroHome
        name="iPhone SE"
        image="./images/intro-iph-se.png"
        alt="iphone SE image"
        text="Love the power. Love the price."
        price="From $14.95/mo. or $299 with trade-in."
      />

      {/* <Intro
        image="./images/apple-logo.png"
        text="Welcome."
        disc="We're glad to see you."
      /> */}
      <Footer />
    </header>
  );
}
