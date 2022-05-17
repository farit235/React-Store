import React from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";

export default function Ipad() {
  return (
    <header className="header>">
      <Header />
      <Intro
        image="./images/ipad-intro.jpeg"
        text="iPad"
        disc="More Power"
        device="Choose your iPad"
      />
    </header>
  );
}
