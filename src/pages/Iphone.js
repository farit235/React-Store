import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Items from "../components/Items";

export default function Iphone() {
  return (
    <header>
      <Header />
      <Intro
        image="./images/iphone-intro.png"
        text="iPhone"
        disc="Best ever."
        device="Choose your iPhone"
      />
    </header>
  );
}
