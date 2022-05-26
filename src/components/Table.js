import React, { useState } from "react";
import TableRow from "./TableRow";

export default function Table(props) {
  const [products, setProducts] = useState(props.arr);

  const deleteProduct = (product) => {
    setProducts(products.filter((p) => p !== product));
  };

  const priceAll = () => {
    let avgPr = 0;
    products.map((el) => {
      avgPr += Number(el[2]);
    });
    return avgPr;
  };

  let allPrice = priceAll();

  return (
    <div className="table">
      <header>
        <h1>Your order</h1>
      </header>
      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Price</th>
            <th>Categories</th>
          </tr>
          {products.map((el, index) => (
            <TableRow key={index} products={el} delete={deleteProduct} />
          ))}
        </tbody>
      </table>
      <div className="total">
        <h3>Total: {allPrice}$</h3>
      </div>
    </div>
  );
}
