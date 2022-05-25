import React from "react";
import Discription from "./Discription";
import SimpleDiscription from "./SimpleDiscription";
import IntroHome from "./IntroHome";

export default function DiscriptionContainerIPD() {
  return (
    <div className="disc-container" id="disc-ipad">
      <Discription
        h1="iPad Pro and M1."
        h2="Power couple."
        disc="The ultimate iPad experience. Now with breakthrough M1 performance, a breathtaking XDR display, and blazing‑fast 5G wireless. Buckle up."
      />
      <SimpleDiscription
        h1="Apple M1"
        img="m1-chip.jpeg"
        desc="With M1, iPad Pro is the fastest device of its kind. It’s designed to take full advantage of next‑level performance and custom technologies like the advanced image signal processor and unified memory architecture of M1. And with the incredible power efficiency of M1, iPad Pro is still thin and light with all‑day battery life, making it as portable as it is powerful."
      />
      <IntroHome image="./images/ipad-show-1.jpeg" />

      <SimpleDiscription
        h1="Thunderbolt."
        img="ipad-show.jpeg"
        desc="For powerful creative workflows. Now with Thunderbolt, this is the fastest, most versatile port ever on iPad. It works with existing USB‑C connectors and opens up an extensive ecosystem of high‑performance accessories for iPad Pro — like fast external storage, displays, and docks. Transfer huge assets or even drive the Pro Display XDR at full 6K resolution."
      />
      <Discription
        h1="Pro cameras."
        disc="Wide and Ultra Wide cameras help you capture the perfect photo or video, or even set up a multicamera filmmaking rig. And with the more powerful ISP in the M1 chip, iPad Pro now features Smart HDR 3."
      />
    </div>
  );
}
