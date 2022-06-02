import React from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Table from "../components/Table";

export default function Buy() {
  let arr = [];
  let arr2 = [];

  // let total = window.sessionStorage.getItem("total");
  let item = window.sessionStorage.getItem("item");
  var jsonData = JSON.parse(item);

  for (var i = 0; i < jsonData.itms.length; i++) {
    var itm = jsonData.itms[i];

    arr.push(itm.id);
    arr.push(itm.title);
    arr.push(itm.price);
    arr.push(itm.category);
    arr2.push(arr);
    arr = [];
  }

  return (
    <header>
      <Header />
      {/* Card in Table */}
      <Table arr={arr2} />
      <Footer />
    </header>
  );
}
