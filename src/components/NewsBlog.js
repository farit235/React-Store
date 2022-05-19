import React from "react";
import NewsBlock from "./NewsBlock";

export default function NewsBlog() {
  const [news, setNews] = React.useState([
    <NewsBlock
      title="Upcoming WWDC 2022 event"
      src="./images/wwdc.jpeg"
      time="11 May 2022"
      author="Gloria Amberhat"
      text="We're hosting a special all-day experience at Apple Park on June 6
        to kick off WWDC22, and we can't wait to connect in person. Members
        of the Apple Developer Program and Apple Developer Enterprise
        Program, and 2022 Swift Student Challenge applicants can submit
        their request to be included in the random selection process
        starting today until May 11 at 9 a.m. PT."
    />,
  ]);

  const showMoreNews = () => {
    const moreNews = [
      <NewsBlock
        title="Swift Playgrounds 4 now available"
        src="./images/news-mac.webp"
        time="12 January 2022"
        author="Mark Besnan"
        text="Swift Playgrounds is a revolutionary app for iPad and Mac that helps you learn to code and build apps using Swift, the same powerful language used to create world-class apps for the App Store. Engaging lessons and walkthroughs demonstrate the core concepts of coding and building apps as you write real Swift code in an interactive environment."
      />,
      <NewsBlock
        title="Join us at Tech Talks 2022"
        src="./images/news-icons.jpeg"
        time="25 October 2022"
        author="Andew Charman"
        text="Explore how you can create best-in-class apps and learn more about the latest updates to Apple APIs and technologies. Connect with Apple experts in over 100 live online sessions and over 1,500 available office hour appointments. Dive into technical content, get your questions answered, and request a meeting for one-on-one guidance."
      />,
    ];
    const newArrNews = [...news, moreNews];
    setNews(newArrNews);
  };

  //didMount and unmount
  React.useEffect(() => {
    console.log("Component DidMount with useEffect hook firstly!");
    return () => {
      console.log("Component DidUnMount with useEffect hook!");
    };
  }, []);

  //updatemount
  React.useEffect(() => {
    console.log("Component News UpdateMount with useEffect hook!");
  }, [news]);

  return (
    <div className="news-blog">
      <header className="header-blog">
        <h1>Latest News</h1>
      </header>
      {news.map((el, index) => (
        <div key={index}>{el}</div>
      ))}

      <button className="news-button" onClick={showMoreNews}>
        More News
      </button>
    </div>
  );
}
