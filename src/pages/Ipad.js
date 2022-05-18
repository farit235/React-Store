import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import IntroHome from "../components/IntroHome";

export default function Ipad() {
  return (
    <header>
      <Header />
      <IntroHome
        name="iPad"
        image="./images/intro_ipad.jpeg"
        alt="iPad image"
        text="More Power."
      />
      <Footer />
    </header>
  );
}
