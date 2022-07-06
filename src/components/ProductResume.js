import React, { useState } from 'react'
import Delete from '../images/delete.svg'

export default function ProductResume({ product, handleDelete, setProductsSelected }) {

  const [quantitySt, setQuantitySt] = useState(1);
  const priceTotal = quantitySt * product.price;

  const handleQuantityAdd = () => {
    setQuantitySt(lastState => lastState + 1);
    setProductsSelected(lastState => {
      const objectIndex = lastState.findIndex(
        productObj => productObj.name === product.name
      );
      lastState[objectIndex].quantity = quantitySt + 1;
      return [...lastState];
    });
  };

  const handleQuantityDecrease = () => {
    if(quantitySt > 1){
      setQuantitySt(lastState => lastState - 1);
    }
    setProductsSelected(lastState => {
      const objectIndex = lastState.findIndex(
        productObj => productObj.name === product.name
      );
      if(quantitySt > 1){
        lastState[objectIndex].quantity = quantitySt - 1;
      }
      return [...lastState];
    });
  };

  return (
    <div key={product.id} >
      <li>{product.name}</li>
      <img
        className="delete"
        id="view-delete"
        src={Delete}
        alt="Delete"
        onClick={() => handleDelete(product.id)}
      ></img>
      <div className="amount">
        <button
          className='buttonAmount'
          id="add"
          onClick={handleQuantityAdd}>+
        </button>


        <h4>{quantitySt}</h4>
        <button
          className='buttonAmount'
          id="decrease"
          onClick={handleQuantityDecrease}
          >-
        </button>
      </div>
      <h4>{priceTotal}</h4>
    </div>
  )
}