import React, { Component } from "react";

export class Item extends Component {
  render() {
    return (
      <div className="item">
        <div>
          <img src={"./images/" + this.props.item.img} />
        </div>
        <div className="info">
          <h2>{this.props.item.title}</h2>
          <p>{this.props.item.desc}</p>
          <b>{this.props.item.price}$</b>
        </div>
        <div
          className="add-to-cart"
          onClick={() => this.props.onAdd(this.props.item)}
        >
          +
        </div>
      </div>
    );
  }
}

export default Item;
