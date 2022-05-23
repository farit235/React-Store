import React from "react";

export default function Video(props) {
  return (
    <iframe
      className="video"
      width={props.info.width}
      height={props.info.height}
      src={props.info.src}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  );
}
