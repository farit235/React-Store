import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import IntroHome from "../components/IntroHome";
import VideoContainer from "../components/VideoContainer";

export default function Ipad() {
  const video = {
    title: "Introducing iPad Pro",
    disc: "Supercharged by the Apple M1 chip. 12.9” Liquid Retina XDR display for extreme contrast and breathtaking detail. Blazing fast 5G wireless. A new ultra wide camera with Center Stage. Thunderbolt, the fastest, most versatile port ever on iPad. And works perfectly with Magic Keyboard and Apple Pencil.",
    button: "Choose yor iPad",
    video: {
      width: "672",
      height: "378",
      src: "https://www.youtube.com/embed/aOq49euWnIo",
    },
  };
  return (
    <header>
      <Header />
      <IntroHome
        name="iPad"
        image="./images/intro_ipad.jpeg"
        alt="iPad image"
        text="More Power."
      />
      <VideoContainer
        title={video.title}
        disc={video.disc}
        button={video.button}
        video={video.video}
      />
      <Footer />
    </header>
  );
}
