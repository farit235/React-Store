import React from "react";

export default function TableRow(props) {
  return (
    <tr>
      <td>{props.products[0]}</td>
      <td>{props.products[1]}</td>
      <td>{props.products[2]}$</td>
      <td>{props.products[3]}</td>
      <td>
        <button
          className="table-cancel"
          onClick={() => {
            props.delete(props.products);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
