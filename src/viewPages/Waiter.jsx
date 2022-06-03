import Logout from "../components/Logout";
import Restaurant from "../components/Restaurant";
import React, { useState} from 'react';

export default function Waiter() {
  const [products, setProducts] = useState([])
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
    data.forEach((products) => {
        if(products.type === menu){
          //console.log("products", products.name, products.image)
          const productsName = products.name; 
          arrProducts.push(productsName)
          setProducts(arrProducts);
         } else if(products.type === menu){
          console.log("products almuerzo", products.name, products.image)
          const productsName = products.name; 
          arrProducts.push(productsName)
          setProducts(arrProducts);
         }
    })
     console.log('Success:', data)
   })
    
   .catch(error => console.error('Error:', error))
  }

  const handleClick = (menu) => {
    validateHttpProducts(menu)
  }
  
  return (
      <div className='waiter'>
        <header className="header">
        <div className="menu">
          <button className='input-buttons' id="breakfast" onClick={() => handleClick("Desayuno")} >BREAKFAST</button>
          <button className='input-buttons' id="today-menu" onClick={() => handleClick("Almuerzo")}>TODAY'S MENU</button>
        </div>
        <Restaurant/>
        <Logout/>
        </header>
        <section className="Orders">
          <div className="info">
            <ul>
              <li>CLIENT</li>
              <li>PRODUCT</li>
              <li>AMOUNT</li>
            </ul>
          </div>
          <div className="data">
          <input type="text" className='user-name' placeholder="Enter customer name"/*value={email} onChange={(e) => { setEmail(e.target.value);}}*/ />
          <ul className="infoProducts">
            {products.map((product) =>
            <>
            <input type="checkbox"/>
            <li>{product}</li>
            <div className="amount">
            <button className='buttonAmount' id="add" /*onClick={() => handleClick("Desayuno")}*/ >+</button>
            <h4>1</h4>
            <button className='buttonAmount' id="decrease" /*onClick={() => handleClick("Almuerzo")}*/>-</button>
            </div>
            </>
            )}
          </ul>
          
          </div>
        </section>
        <section>
          <div className="resume">
              <ul>
                <li>RESUME</li>
                <li>PRICE</li>
              </ul>
          </div>
          <div>
          <input className='user-name' type="text" placeholder="Products"/*value={email} onChange={(e) => { setEmail(e.target.value);}}*/ />
          </div>
        </section>
        <section className="send-cancel">
          <button className='input-buttons' /*onClick={handleClick}*/>SEND</button>
          <button className='input-buttons' /*onClick={handleClick}*/>CANCEL</button>
        </section>
    </div>
  )
}