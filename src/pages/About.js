import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FormComp from "../components/FormComp";
import IntroHome from "../components/IntroHome";

export default function About() {
  return (
    <header>
      <Header />
      <IntroHome
        name="Contact Us"
        image="./images/support.png"
        alt="contact image"
        text="We're ready to help you."
      />
      <FormComp title="Tell us your problem " />
      <Footer />
    </header>
  );
}
