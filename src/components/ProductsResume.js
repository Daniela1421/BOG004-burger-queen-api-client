import React from "react";
import ProductResume from "./ProductResume";


const ProductsResume = ({ productsSelected, productDelete, setProductsSelected}) => {

  const handleDelete = (id) => {
			productDelete(id) 
  };

  return (
    <div className="infoProductsResume">
    {productsSelected.map((product) =>
      <ProductResume key={product.id} product={product} handleDelete={handleDelete} setProductsSelected={setProductsSelected} productsSelected={productsSelected}/>
    )}
    </div>
  );
};

export {ProductsResume}

// console.log("Products selected", productsSelected)

  // const addQuantity = (product) => {
  //   const productoExistente = productsSelected.findIndex(({id}) => id === product.id)
  //   // console.log("productsselected", productsSelected)
  //   console.log("producto existente", productoExistente)
  //   productsSelected[productoExistente].quantity = product.quantity + 1
  //   // setAmount(productoExistente.quantity)
  //   // setOrder([...order, product])
  //   // console.log("order array ", order)
  // }

