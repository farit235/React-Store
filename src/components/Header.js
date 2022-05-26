import React, { useState } from "react";
import Layout from "../pages/Layout";
import Order from "./Order";
import { Link } from "react-router-dom";

const showOrders = (props) => {
  let total = 0;
  let allItems = [];
  let myItems = {};

  props.orders.forEach((element) => {
    total += Number.parseFloat(element.price);
    allItems.push(element);
    return total, allItems;
  });

  myItems.itms = allItems;

  // window.sessionStorage.setItem("total", total);
  window.sessionStorage.setItem("item", JSON.stringify(myItems));

  return (
    <div>
      {props.orders.map((el) => (
        <Order key={el.id} item={el} onDelete={props.onDelete} />
      ))}

      <p className="total-price">
        Total: {new Intl.NumberFormat().format(total)}$
        <span>
          <Link to="/shop/buy" style={{ textDecoration: "none" }}>
            <button className="card-button">Buy</button>
          </Link>
        </span>
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
        <div className="menu">
          <Layout />
          <div className="to-cart">
            <div
              onClick={() => setCartOpen((cartOpen = !cartOpen))}
              className="cart"
            >
              <img src="../images/cart.png" alt="cart icon" width="30px" />
            </div>
          </div>
          {cartOpen && (
            <div className="shop-cart">
              {props.orders.length > 0 ? showOrders(props) : showNothing()}
            </div>
          )}
        </div>
      </div>
      <div className="presentation"></div>
    </header>
  );
}
