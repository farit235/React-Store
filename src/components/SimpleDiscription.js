import React from "react";

export default function SimpleDiscription(props) {
  return (
    <div className="s-discription">
      <header className="s-discription-header">
        <h1>{props.h1}</h1>
        <h2>{props.h2}</h2>
      </header>
      <main className="s-discription-main">
        <img src={"./images/" + props.img} alt="mac-fan" />
        <p>{props.desc}</p>
        <p>{props.desscAdd}</p>
      </main>
    </div>
  );
}
