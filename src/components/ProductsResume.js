import React, {/*useState,*/ forwardRef } from "react";
//import Delete from "../images/delete.svg";
import ProductResume from "./ProductResume";
//import Counter from "./Counter";


const ProductsResume = forwardRef(({ productsSelected, productDelete, setProductsSelected}, ref ) => {
  // const [amount, setAmount] = useState(1)
  // const [order, setOrder] = useState([...productsSelected])
 
  //console.log("order Products resume", order)

  // useEffect(() => {
  //   addQuantity()
    
  // }, [productsSelected])
  

  const handleDelete = (id) => {
			productDelete(id) 
  };

  console.log("Products selected", productsSelected)

  // const addQuantity = (product) => {
  //   const productoExistente = productsSelected.findIndex(({id}) => id === product.id)
  //   // console.log("productsselected", productsSelected)
  //   console.log("producto existente", productoExistente)
  //   productsSelected[productoExistente].quantity = product.quantity + 1
  //   // setAmount(productoExistente.quantity)
  //   // setOrder([...order, product])
  //   // console.log("order array ", order)
  // }


  // const amountPrice = (product) => {
  //   return amount * product.price 
  // }
  // console.log("product", product)

  // console.log("ref en products resume", ref)

  return (
    <div className="infoProductsResume">
    {productsSelected.map((product) =>
      <ProductResume key={product.id} product={product} handleDelete={handleDelete} setProductsSelected={setProductsSelected} productsSelected={productsSelected}/>
      // <li>{product.name}</li>
      // <img
      //   className="delete"
      //   id="view-delete"
      //   src={Delete}
      //   alt="Delete"
      //   onClick={() => handleDelete(product.id)}
      // ></img>
      // <div className="amount">
      //   <button 
      //     className='buttonAmount' 
      //     id="add" 
      //     onClick={() => {
      //       // if (amount >= 1) { 
      //       //   setAmount(amount + 1) 
      //       // }
      //       // updateQuantities(product.id, "add")
      //       addQuantity(product)
            
      //     }}>+
      //   </button>

      //   {  console.log("return ", product.quantity)}
      //   <h4>{product.quantity}</h4>
      //   <button 
      //     className='buttonAmount' 
      //     id="decrease" 
      //     onClick={() => { 
      //       if (amount > 1) { 
      //         setAmount(amount - 1) 
      //       } 
      //       // updateQuantities(product.id, "decrease")
      //     }}>-
      //   </button>
      // </div>
      // <h4 ref={ref} >{amount * product.price}</h4>
      // </Fragment>
    )}
    </div>
  );
});

export {ProductsResume}
