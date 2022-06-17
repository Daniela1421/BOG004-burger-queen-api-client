import Logout from "../components/Logout";
import Restaurant from "../components/Restaurant";
import React, { useState, useEffect } from 'react';

export default function Chef() {
  const [listOrders, setListOrders] = useState([])

  useEffect(() => {
    getOrder()

  }, [])
  

  const getOrder = () => {
    const urlApi = 'http://localhost:8080';
    fetch(`${urlApi}/orders`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'authorization': 'Bearer ' + localStorage.getItem('userToken'),
    }
    })

    .then(res => res.json())

    .then(data => {
      // console.log("orders", data)
      const arrOrders = []; 
      data.forEach(order => {
      
      const client = order.client
      const status = order.status
      const products = order.products

      arrOrders.push({client, status, products})
      setListOrders(arrOrders)
      });
      console.log("arrOrders", arrOrders)
      // setListOrders(arrOrders)
    })

    .catch(error => console.error('Error:', error))
  }
  
  const time = listOrders.map((order) => order.products.map((product)=> product.product.dateEntry))
  console.log("time ", time)

  return (
    <div className="chef">
    <header className="header">
      <Restaurant />
      <Logout />
    </header>
    <section>
      <div className="info">
        <ul>
          <li>PEDIDOS</li>
        </ul>
      </div>
      <div className="info">
        <ul>
          <li>TIEMPO DE PREPARACIÓN</li>
          <li>PEDIDO</li>
          <li>ESTADO</li>
        </ul>
      </div>
    </section>
    <div>
      <ul className="priceAmountProduct">
        {/* {console.log("selected", listOrders)} */}
        {listOrders.map((order, index) =>
          <li key={index}>
           <p>{order.client}</p>
           
           {
            order.products.map((product, i)=> (
              <div key={i+1000}>
              <p>{product.product.name}</p>
              <p>{}</p>
              </div>
            ))
           }
           <p>{order.status}</p>
          </li>
        )}
      </ul>
    </div>
    <section className="send-cancel">
        <button className='input-buttons' /*onClick={handleClick}*/>ENVIAR</button>
    </section>
    </div>
  )
}
