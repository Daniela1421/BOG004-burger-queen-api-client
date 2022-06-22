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
      <Logout />
      <Restaurant />
    <header className="header">
    </header>
    <section>
  
      <div className="order">
        <ul>
          <li>PENDIENTES</li>
        </ul>
      </div>
      <div className="order">
        <ul>
          <li>LISTOS</li>
        </ul>
      </div>
    </section>
    <div className="data-div-chef">
      <ul >
        {/* {console.log("selected", listOrders)} */}
        {listOrders.map((order, index) =>
          <li key={index} className="data-chef">
           <p> Cliente: {order.client}</p>
           
           {
            order.products.map((product, i)=> (
              <div key={i+1000}>
              <p>Producto: {product.product.name}</p>
              <p>{}</p>
              </div>
            ))
           }
           <p>{order.status}</p>
           <button className="listo">Listo</button>
          </li>
        )}
      </ul>
    </div>

    </div>
  )
}
