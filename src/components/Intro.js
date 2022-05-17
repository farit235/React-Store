import React from "react";

export default function Intro(props) {
  return (
    <div className="presentation">
      <img src={props.image} alt="iphone 13 Pro max" />
      <div className="text">
        <h1>{props.text}</h1>
        <h4>{props.disc}</h4>
      </div>
      <div className="header-items">
        <h2>{props.device}</h2>
      </div>
    </div>
  );
}
