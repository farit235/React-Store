import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import IntroHome from "../components/IntroHome";

export default function Iphone() {
  return (
    <header>
      <Header />
      <IntroHome
        name="iPhone"
        image="./images/intro_iphone.jpeg"
        alt="iPhone image"
        text="Best ever."
      />
      <Footer />
    </header>
  );
}
