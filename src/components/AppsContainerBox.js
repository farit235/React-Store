import React from "react";
import AppsContainer from "./AppsContair";

export default function AppsContainerBox() {
  return (
    <div className="all-container-box">
      <header className="all-containers-header">
        <h1>Apps You Love</h1>
      </header>
      <div className="all-containers">
        <div className="all-containers-boxes">
          <AppsContainer src="app-icon-mail.png" appName="Mail" />
          <AppsContainer src="app-icon-dev.png" appName="XCode" />
          <AppsContainer src="app-icon-fcut.png" appName="Final Cut" />
          <AppsContainer src="app-icon-rem.png" appName="Reminders" />
          <AppsContainer src="app-icon-txt.png" appName="Text" />
          <AppsContainer src="app-icon-photo.png" appName="Photo" />
          <AppsContainer src="app-icon-keynote.png" appName="Keynote" />
          <AppsContainer src="app-icon-pages.png" appName="Pages" />
        </div>
        <div className="all-containers-image">
          <img src="./images/here.png" alt="here" width="50%" />
          <img src="./images/app-mac.png" alt="iphone" width="100%" />
        </div>
      </div>
    </div>
  );
}
