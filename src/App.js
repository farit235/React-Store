import React from "react";
// import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Iphone from "./pages/Iphone";
import Mac from "./pages/Mac";
import Ipad from "./pages/Ipad";
import Shop from "./pages/Shop";
import News from "./pages/News";
import Buy from "./pages/Buy";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     items: [
  //       {
  //         id: 1,
  //         img: "iphone_13_pro_item.png",
  //         title: "iPhone 13 Pro",
  //         desc: "Best iphone",
  //         category: "iphones",
  //         price: "999",
  //       },
  //       {
  //         id: 2,
  //         img: "iphone_13_pro_max_item.png",
  //         title: "iPhone 13 Pro Max",
  //         desc: "Best iphone ever",
  //         category: "iphones",
  //         price: "1299",
  //       },
  //       {
  //         id: 3,
  //         img: "iphone_13_item.png",
  //         title: "iPhone 13",
  //         desc: "ipgone",
  //         category: "iphones",
  //         price: "799",
  //       },
  //       {
  //         id: 4,
  //         img: "ipad_mini.png",
  //         title: "iPad mini ",
  //         desc: "iPad mini - the smallest iPad",
  //         category: "ipad",
  //         price: "699",
  //       },
  //       {
  //         id: 5,
  //         img: "ipad.png",
  //         title: "iPad 2021 ",
  //         desc: "iPad 2021 - the cheapest iPad",
  //         category: "ipad",
  //         price: "399",
  //       },
  //       {
  //         id: 6,
  //         img: "ipad_pro.png",
  //         title: "iPad Pro ",
  //         desc: "iPad Pro - you like a Pro",
  //         category: "ipad",
  //         price: "1099",
  //       },
  //       {
  //         id: 7,
  //         img: "mac_air.png",
  //         title: "MacBook Air ",
  //         desc: "MacBook Air - better than your PC",
  //         category: "mac",
  //         price: "999",
  //       },
  //       {
  //         id: 8,
  //         img: "apple_watch_s7.png",
  //         title: "Apple Watch Series 7",
  //         desc: "Apple Watch - everything on your wrist",
  //         category: "watch",
  //         price: "599",
  //       },
  //       {
  //         id: 9,
  //         img: "airpods_3.png",
  //         title: "AirPods 3 ",
  //         desc: "AirPods 3 - feel the Air",
  //         category: "airpods",
  //         price: "149",
  //       },
  //     ],
  //     orders: [],
  //     currentItems: [],
  //   };
  //   this.state.currentItems = this.state.items;
  //   this.addToOrder = this.addToOrder.bind(this);
  //   this.deleteOrder = this.deleteOrder.bind(this);
  //   this.chooseCategory = this.chooseCategory.bind(this);
  // }
  render() {
    return (
      // <div className="wrapper">
      //   <Header orders={this.state.orders} onDelete={this.deleteOrder} />
      //   <div className="header-items">
      //     <h2>Choose your product</h2>
      //   </div>
      //   <Categories chooseCategory={this.chooseCategory} />
      //   <Items items={this.state.currentItems} onAdd={this.addToOrder} />
      //   <Footer />
      // </div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="contact" element={<About />} />
          <Route path="iphone" element={<Iphone />} />
          <Route path="mac" element={<Mac />} />
          <Route path="ipad" element={<Ipad />} />
          <Route path="shop" element={<Shop />} />
          <Route path="news" element={<News />} />
          <Route path="shop/buy" element={<Buy />} />
        </Routes>
      </BrowserRouter>
    );
  }

  // chooseCategory(category) {
  //   if (category === "all") {
  //     this.setState({ currentItems: this.state.items });
  //     return;
  //   }
  //   this.setState({
  //     currentItems: this.state.items.filter((el) => el.category === category),
  //   });
  // }

  // deleteOrder(id) {
  //   this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  // }

  // addToOrder(item) {
  //   this.setState({ orders: [...this.state.orders, item] });
  // }
}

export default App;
