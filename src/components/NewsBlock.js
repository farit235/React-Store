import React from "react";

export default function NewsBlock(props) {
  return (
    <div className="news-block">
      <div className="image-block">
        <img className="img-block" src={props.src} alt="About Apple Tech" />
      </div>
      <div className="main-block">
        <header>
          <h2 className="title-block">
            <a href="#0" className="link">
              {props.title}
            </a>
          </h2>
        </header>
        <div className="author-date-block">
          <p>{props.time}</p>
          <p>
            <span className="author">Author: {props.author}</span>
          </p>
        </div>
        <div className="text-block">
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
}
