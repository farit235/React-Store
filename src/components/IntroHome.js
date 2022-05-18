import React from "react";

export default function IntroHome(props) {
  return (
    <div className="intro-home">
      <h2 className="intro-text">{props.name}</h2>
      <p className="intro-subtext">{props.text}</p>
      <p className="intro-price">{props.price}</p>
      <p>
        <a href="#" className="shop-now">
          {props.button}
        </a>
      </p>
      <img src={props.image} alt={props.alt} className="intro-image" />
    </div>
  );
}
