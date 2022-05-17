import React, { useState } from "react";
import Layout from "../pages/Layout";
import Order from "./Order";

const showOrders = (props) => {
  let total = 0;
  props.orders.forEach((element) => {
    total += Number.parseFloat(element.price);
    return total;
  });

  return (
    <div>
      {props.orders.map((el) => (
        <Order key={el.id} item={el} onDelete={props.onDelete} />
      ))}
      <p className="total-price">
        Total: {new Intl.NumberFormat().format(total)}$
      </p>
    </div>
  );
};

const showNothing = () => {
  return (
    <div className="empty">
      <h3>No items in cart</h3>
    </div>
  );
};

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);

  return (
    <header className="header">
      <div className="lmn">
        <div className="logo">
          <h1>Apple World</h1>
        </div>
        <div>{/* <Menu /> */}</div>
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
          {cartOpen && (
            <div className="shop-cart">
              {props.orders.length > 0 ? showOrders(props) : showNothing()}
            </div>
          )}

          {/* <ul className="nav">
            <li>iPhone</li>
            <li>iPad</li>
            <li>Mac</li>
            <li>
              <a href="/about">about</a>
            </li>
          </ul> */}
          <Layout />
        </div>
      </div>
      <div className="presentation"></div>
    </header>
  );
}
