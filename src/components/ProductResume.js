import React, {useState} from 'react'
import Delete from '../images/delete.svg'

export default function ProductResume({product, handleDelete, setProductsSelected, productsSelected}) {
 const [quantity, setQuantity] = useState(1)
 const quantityObject = product.quantity = quantity
 console.log("prueba quantity object", quantityObject)
 console.log("product de ProductResume", product)
 const priceTotal = quantity * product.price; 
 

 const handleQuantity = () => {
    setProductsSelected(lastState => {
        const arrFiltered = lastState.filter(productArr => productArr.name !== product.name) 
        const productIndex = lastState.findIndex(productArr => productArr.name === product.name)
        const newObject = { 
            id: product.id,
            name: product.name, 
            price: product.price, 
            quantity: quantity
        }
        return [...arrFiltered, newObject]
     })
 }

 console.log("priceTotal", priceTotal)
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
        //   onClick={() => {
        //     if (quantity >= 1) { 
        //     setQuantity(quantity + 1)
        //   }
        //     handleQuantity()
        //   }}
        onClick= {handleQuantity}>+
        </button>

        
        <h4>{quantity}</h4>
        <button 
          className='buttonAmount' 
          id="decrease" 
          onClick={() => { 
            if (quantity > 1) { 
            setQuantity(quantity - 1)
            }
          }}>-
        </button>
      </div>
      <h4>{priceTotal}</h4>
    </div>
  )
}
