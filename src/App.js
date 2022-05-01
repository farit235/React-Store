import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          img: "iphone_13_pro_item.png",
          title: "iPhone 13 Pro",
          desc: "Best iphone",
          category: "iphones",
          price: "999",
        },
        {
          id: 2,
          img: "iphone_13_pro_max_item.png",
          title: "iPhone 13 Pro Max",
          desc: "Best iphone ever",
          category: "iphones",
          price: "1299",
        },
        {
          id: 3,
          img: "iphone_13_item.png",
          title: "iPhone 13",
          desc: "ipgone",
          category: "iphones",
          price: "799",
        },
      ],
    };
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="header-items">
          <h2>Choose your iPhone</h2>
        </div>
        <Items items={this.state.items} />
        <Footer />
      </div>
    );
  }
}

export default App;
