import React, { Component } from "react";

export class Order extends Component {
  render() {
    return (
      <div className="item">
        <img src={"./images/" + this.props.item.img} alt="item" />
        <h2>{this.props.item.title}</h2>
        <b>{this.props.item.price}$</b>
        <b>
          <img
            className="delete-icon"
            src="./images/delete-icon.png"
            alt="del-icon"
            onClick={() => this.props.onDelete(this.props.item.id)}
          />
        </b>
      </div>
    );
  }
}

export default Order;
