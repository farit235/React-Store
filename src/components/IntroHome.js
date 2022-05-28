import React from "react";
import { Link } from "react-router-dom";

export default function IntroHome(props) {
  return (
    <div className="intro-home">
      <h2 className="intro-text">{props.name}</h2>
      <p className="intro-subtext">{props.text}</p>
      <p className="intro-price">{props.price}</p>
      <p>
        <Link
          to={{
            pathname: props.link,
            state: {
              someStateValue: 1,
            },
          }}
          style={{ textDecoration: "none" }}
        >
          <span className="shop-now">{props.button}</span>
        </Link>
      </p>
      <img src={props.image} alt={props.alt} className="intro-image" />
    </div>
  );
}
