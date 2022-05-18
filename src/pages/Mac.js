import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import IntroHome from "../components/IntroHome";

export default function Mac() {
  return (
    <header>
      <Header />
      <IntroHome
        name="Mac"
        image="./images/intro_mac.jpeg"
        alt="Mac image"
        text="Power Behind You."
      />
      <Footer />
    </header>
  );
}
