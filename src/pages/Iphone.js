import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import IntroHome from "../components/IntroHome";
import VideoContainer from "../components/VideoContainer";
import DiscriptionContainerIPH from "../components/DiscriptionContainerIPH";

export default function Iphone() {
  const video = {
    title: "iPhone 13 & iPhone 13 Pro | Now in Green",
    disc: "The biggest upgrade to the Pro camera system with advanced low-light performance, macro photography, Cinematic mode, and more. Super Retina XDR display with ProMotion. A15 Bionic, the world’s fastest smartphone chip. Exceptional durability of Ceramic Shield. A huge leap in battery life. This is iPhone 13 Pro.",
    button: "Choose Yout iPhone",
    video: {
      width: "672",
      height: "378",
      src: "https://www.youtube.com/embed/kV__iZuxDGE",
    },
  };

  return (
    <header>
      <Header />
      <IntroHome
        name="iPhone"
        image="./images/intro-iphone.jpeg"
        alt="iPhone image"
        text="Best ever."
      />
      <VideoContainer
        title={video.title}
        disc={video.disc}
        button={video.button}
        video={video.video}
      />

      <DiscriptionContainerIPH />
      <Footer />
    </header>
  );
}
