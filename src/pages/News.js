import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import IntroHome from "../components/IntroHome";
import NewsBlog from "../components/NewsBlog";

export default function News() {
  const [visibleNews, setVisibleNews] = React.useState(true);

  const toggleVisibleNews = () => {
    setVisibleNews((visible) => !visible);
  };

  return (
    <div className="news">
      <Header />
      <IntroHome
        name="News"
        image="./images/apple-news.png"
        alt="Apple News image"
        text="Hundreds of magazines
        and leading newspapers.
        One subscription."
        button="Learn more >"
      />
      {visibleNews && <NewsBlog />}
      <button className="news-button" onClick={toggleVisibleNews}>
        Show/Close News
      </button>
      <Footer />
    </div>
  );
}
