import React from "react";
import Discription from "./Discription";
import SimpleDiscription from "./SimpleDiscription";
import IntroHome from "./IntroHome";

export default function DiscriptionContainerIPH() {
  return (
    <div className="disc-container" id="disc-iphone">
      <Discription
        h1="Oh. So. Pro."
        disc="Our Pro camera system gets its biggest upgrade ever. With next-level hardware that captures so much more detail. Superintelligent software for new photo and filmmaking techniques. And a mind-blowingly fast chip that makes it all possible. It’ll change the way you shoot."
      />
      <SimpleDiscription
        h1="Bring on 
        the night."
        img="iphone-perfomance-cam.jpeg"
        desc="iPhone 13 Pro was made for low light. The Wide camera adds a wider aperture and our largest sensor yet — and it leverages the LiDAR Scanner for Night mode portraits. Ultra Wide gets a wider aperture, a faster sensor, and all-new autofocus. And Telephoto now has Night mode."
      />
      <IntroHome image="./images/iphone-cameras.png" />

      <SimpleDiscription
        h1="Shoot it."
        h2="Cut it."
        img="iphone-perfomance-edit.png"
        desc="The high color fidelity and low compression of ProRes let you record, edit, and deliver broadcast-ready content on the go. Now you can complete a project in ProRes entirely on your iPhone. Or easily bring ProRes videos from your iPhone into Final Cut Pro on your Mac."
      />
      <Discription
        h1="No one does 5G like iPhone. "
        disc="The world is quickly moving to 5G. Streaming, downloading — everything happens so much faster. 5G is even fast enough for serious multiplayer gaming, sharing AR videos, and more. With Smart Data mode, iPhone will downshift automatically to save power when you don’t need all that speed."
      />
    </div>
  );
}
