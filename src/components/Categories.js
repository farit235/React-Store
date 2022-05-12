import React, { Component } from "react";

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          key: "all",
          name: "All",
        },
        {
          key: "iphones",
          name: "iPhones",
        },
        {
          key: "ipad",
          name: "iPad",
        },
        {
          key: "mac",
          name: "Mac",
        },
        {
          key: "watch",
          name: "Watch",
        },
        {
          key: "airpods",
          name: "Airpods",
        },
      ],
    };
  }

  render() {
    return (
      <div className="categories">
        {this.state.categories.map((el) => (
          <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>
            {el.name}
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;
