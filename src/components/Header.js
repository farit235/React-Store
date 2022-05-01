import React from "react";

export default function Header() {
  return (
    <header className="header">
      <div className="lmn">
        <div className="logo">
          <h1>Apple World</h1>
        </div>
        <div className="menu">
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
