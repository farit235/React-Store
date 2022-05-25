import React from "react";

export default function AppsContainer(props) {
  return (
    <div className="info-cont">
      <div className="info-container">
        <img src={"./images/" + props.src} alt="mail app icon" width="150px" />
      </div>
      <span>{props.appName}</span>
    </div>
  );
}
