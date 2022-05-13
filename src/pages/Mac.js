import React from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";

export default function Mac() {
  return (
    <header>
      <Header />
      <Intro
        image="./images/mac-intro.png"
        text="Mac"
        disc="Power Behind You."
        device="Mac"
      />
    </header>
  );
}
