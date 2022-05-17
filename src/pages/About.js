import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CompDiscriprion from "../components/CompDiscriprion";
import Intro from "../components/Intro";

export default function About() {
  return (
    <header>
      <Header />
      {/* intro in a component */}
      <CompDiscriprion />
      <Footer />
    </header>
  );
}
