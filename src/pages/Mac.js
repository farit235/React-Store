import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import IntroHome from "../components/IntroHome";
import VideoContainer from "../components/VideoContainer";

export default function Mac() {
  const video = {
    title: "The new MacBook Pro",
    disc: "The new MacBook Pro is a beast. Supercharged for pros by the M1 Pro or M1 Max, this… thing delivers extraordinary performance that pushes the boundaries of creativity. And with a stunning Liquid Retina XDR display that’s the best ever in a notebook, there’s no limit to what, or where, you can create. The all-new MacBook Pro. Two sizes, two chips. Let it rip.",
    button: "Build Your Mac",
    video: {
      width: "672",
      height: "378",
      src: "https://www.youtube.com/embed/9tobL8U7dQo",
    },
  };
  return (
    <header>
      <Header />
      <IntroHome
        name="Mac"
        image="./images/intro_mac.jpeg"
        alt="Mac image"
        text="Power Behind You."
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
