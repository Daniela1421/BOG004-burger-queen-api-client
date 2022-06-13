import React from "react";
import Delete from "../images/delete.svg";
import Counter from "./Counter";

export const ProductsResume = ({ product, productsSelected, productDelete }) => {
  const handleDelete = (id) => {
    // console.log("delete", id );
			productDelete(id)
    // console.log(
    //   "delete filter",
    //   product
    // );

    
  };
  return (
    <div className="infoProductsResume" key={product.id}>
      <li>{product.name}</li>
      <img
        className="delete"
        id="view-delete"
        src={Delete}
        alt="Delete"
        onClick={() => handleDelete(product.id)}
      ></img>

      <Counter price={product.price} />
    </div>
  );
};
