import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CompDiscriprion from "../components/CompDiscriprion";
import FormComp from "../components/FormComp";

export default function About() {
  return (
    <header>
      <Header />
      {/* intro in a component */}
      <CompDiscriprion />
      <FormComp title="Tell us your problem " />
      <Footer />
    </header>
  );
}
