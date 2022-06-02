import Logout from "../components/Logout";
import Restaurant from "../components/Restaurant";
import React, { useState} from 'react';

export default function Waiter() {
  const [products, setProducts] = useState('')
  const urlApi = 'http://localhost:8080';

  const validateHttpProducts = () => {

    fetch(`${urlApi}/products`, {
      method: 'GET', // or 'PUT'
      //body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + localStorage.getItem('userToken'),
      }

    })
    
   .then(res => res.json())
   
   .then(data => {
     /*
     data.forEach((products) => {
       products.quantity = 0;
     })
     if (typeof data === 'object' && data.length > 0){
       */
    data.forEach((products) => {
     if(products.type === 'Desayuno'){
       setProducts(products)
     }
    })
       setProducts(data);
     

     console.log('Success:', data)
   })
    
   .catch(error => console.error('Error:', error))
  }

  const handleClick = () => {
    validateHttpProducts()
  }
  
  return (
      <div className='waiter'>
        <header className="header">
        <div className="menu">
          <button className='input-buttons' id="breakfast" onClick={handleClick} >BREAKFAST</button>
          <button className='input-buttons' id="today-menu"/*onClick={handleClick}*/>TODAY'S MENU</button>
        </div>
        <Restaurant/>
        <Logout/>
        </header>
        <section>
          <div className="info">
            <ul>
              <li>CLIENT</li>
              <li>PRODUCT</li>
              <li>AMOUNT</li>
            </ul>
          </div>
          <div>
          <input className='user-name' type="text" placeholder="Enter customer name"/*value={email} onChange={(e) => { setEmail(e.target.value);}}*/ />
          <h2> {products} </h2>
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
