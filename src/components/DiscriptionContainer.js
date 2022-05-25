import React from "react";
import SimpleDiscription from "./SimpleDiscription";
import Discription from "./Discription";
import IntroHome from "./IntroHome";

export default function CompDiscriprion() {
  return (
    <div className="disc-container">
      <Discription
        h1="Supercharged for pros."
        disc="The most powerful MacBook Pro ever is here. With the blazing-fast M1
          Pro or M1 Max chip — the first Apple silicon designed for pros — you
          get groundbreaking performance and amazing battery life. Add to that a
          stunning Liquid Retina XDR display, the best camera and audio ever in
          a Mac notebook, and all the ports you need. The first notebook of its
          kind, this MacBook Pro is a beast."
      />
      <SimpleDiscription
        h1="Scary fast."
        img="m1-pro.jpeg"
        desc="M1 Pro takes the exceptional performance of the M1 architecture to a whole new level for pro users. Even the most ambitious projects are easily handled with up to 10 CPU cores, up to 16 GPU cores, a 16‑core Neural Engine, and dedicated encode and decode media engines that support H.264, HEVC, and ProRes codecs."
      />
      <IntroHome image="./images/mac-perfomance.png" />

      <SimpleDiscription
        h1="The coolest part."
        img="mac-fan.jpeg"
        desc="Advanced thermal systems move 50 percent more air, even at lower fan speeds. And thanks to the efficiency of Apple silicon, the fans never turn on for many tasks you do every day."
      />
      <Discription
        h1="We can do this all day."
        disc="Ferocious performance with game‑changing battery life — that efficiency is the magic of Apple silicon. A single charge lets you compile up to four times as much code in Xcode19 or edit images for up to twice as long in Lightroom Classic.20 And unlike other notebooks, MacBook Pro delivers the same amazing performance whether it’s plugged in or not."
      />
    </div>
  );
}
