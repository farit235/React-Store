import React, { Component } from "react";
import Item from "./Item";

export class Items extends Component {
  render() {
    return (
      <main className="main-categories">
        {this.props.items.map((el) => (
          <Item key={el.id} item={el} onAdd={this.props.onAdd} />
        ))}
      </main>
    );
  }
}

export default Items;
