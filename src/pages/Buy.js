import React from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Buy() {
  let total = window.sessionStorage.getItem("total");
  return (
    <header>
      <Header />
      <Card total={total} />
      <Footer />
    </header>
  );
}
