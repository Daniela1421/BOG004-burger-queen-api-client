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


