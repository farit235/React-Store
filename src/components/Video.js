import React from "react";

export default function Video(props) {
  return (
    <div className="video-comp">
      <h2>{props.title}</h2>
      <div className="video">{props.video}</div>
    </div>
  );
}
