import Logout from "../components/Logout";
import Restaurant from "../components/Restaurant";
import React, { useState } from 'react';

export default function Waiter() {
  const [products, setProducts] = useState([])
  const [productsSelected, setProductsSelected] = useState([])
  const urlApi = 'http://localhost:8080';

  const validateHttpProducts = (menu) => {

    fetch(`${urlApi}/products`, {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + localStorage.getItem('userToken'),
      }
    })
    
   .then(res => res.json())
   
   .then(data => {
    const arrProducts = []
    const arrayIDs = []
    data.forEach((products) => {

        if(products.type === menu){
          let productsId = products.id;
          arrayIDs.push(productsId)
          const productsName = products.name; 
          let productsPrice = products.price;

          arrProducts.push({
            name: productsName,
            price: productsPrice
          })
          setProducts(arrProducts);
         } else if(products.type === menu){
          console.log("products almuerzo", products.name, products.image)
          const productsName = products.name; 
          let productsPrice = products.price;

          arrProducts.push({
            name: productsName,
            price: productsPrice
            })
          setProducts(arrProducts);
         }

    })
    console.log(arrayIDs)
    console.log(arrProducts)
     //console.log('Success:', data)
   })
    
   .catch(error => console.error('Error:', error))
  }

  const handleClick = (menu) => {
    validateHttpProducts(menu)
  }
 
 const handleSetProducts = (product) => {
   console.log(product)
   setProductsSelected([product].concat(productsSelected))
 }
   
  return (
      <div className='waiter'>
        <header className="header">
        <div className="menu">
          <button className='input-buttons' id="breakfast" onClick={() => handleClick("Desayuno")} >DESAYUNO</button>
          <button className='input-buttons' id="today-menu" onClick={() => handleClick("Almuerzo")}>ALMUERZO</button>
        </div>
        <Restaurant/>
        <Logout/>
        </header>
        <section className="Orders">
          <div className="info">
            <ul>
              <li>CLIENTE</li>
              <li>PRODUCTO</li>
              <li>PRECIO</li>
            </ul>
          </div>
          <div className="data">
          <input type="text" className='user-name' placeholder="Enter customer name"/*value={email} onChange={(e) => { setEmail(e.target.value);}}*/ />
          <ul className="infoProducts">
            {products.map((product) =>
            <>
            <button 
            type="button"
            className='add-products'
            id="add-products" onClick={() => handleSetProducts(product)}>Agregar</button>
            <li >{product.name}</li>
            <li >{product.price}</li>
            </>
            )}
          </ul>
          
          </div>
        </section>
        <section>
          <div className="resume">
              <ul>
                <li>RESUMEN</li>
                <li>CANTIDAD</li>
              </ul>
          </div>
          <div>
          <div className="amount">
            <button className='buttonAmount' id="add" /*onClick={() => handleClick("Desayuno")}*/ >+</button>
            <h4>1</h4>
            <button className='buttonAmount' id="decrease" /*onClick={() => handleClick("Almuerzo")}*/>-</button>
            </div>
          <input className='user-name' type="text" placeholder="Products"/*value={email} onChange={(e) => { setEmail(e.target.value);}}*/ />
          </div>
        </section>
        <section className="send-cancel">
          <button className='input-buttons' /*onClick={handleClick}*/>ENVIAR</button>
          <button className='input-buttons' /*onClick={handleClick}*/>CANCELAR</button>
        </section>
    </div>
  )
}