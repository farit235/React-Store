import React from "react";
import Video from "./Video";

export default function VideoContainer(props) {
  return (
    <div className="video-container">
      <header className="video-header">
        <h2>{props.title}</h2>
      </header>
      <main>
        <div>
          {props.disc}
          <h2>{props.button}</h2>
        </div>
        <Video info={props.video} />
      </main>
    </div>
  );
}
