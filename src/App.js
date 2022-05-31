import React from "react";
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
  render() {
    return (
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
}

export default App;
