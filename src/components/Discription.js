import React from "react";

export default function Discription(props) {
  return (
    <div className="discription">
      <header className="discription-header">
        <h1>{props.h1}</h1>
        <h2>{props.h2}</h2>
      </header>
      <main className="discription-main">
        <p>{props.disc}</p>
        <p>{props.discAdd}</p>
      </main>
    </div>
  );
}
