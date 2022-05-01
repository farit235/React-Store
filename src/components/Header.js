import React, { useState } from "react";

export default function Header() {
  let [cartOpen, setCartOpen] = useState(false);

  return (
    <header className="header">
      <div className="lmn">
        <div className="logo">
          <h1>Apple World</h1>
        </div>
        <div className="menu">
          <div className="to-cart">
            <div
              onClick={() => setCartOpen((cartOpen = !cartOpen))}
              className="cart"
            >
              {" "}
              Cart{" "}
            </div>
            {/* <img src="./images/cart.png" alt="cart icon" /> */}
          </div>
          {cartOpen && <div className="shop-cart"></div>}
          <ul className="nav">
            <li>iPhones</li>
            <li>iPad</li>
            <li>Mac</li>
            <li>About Us</li>
          </ul>
        </div>
      </div>
      <div className="presentation"></div>
    </header>
  );
}
