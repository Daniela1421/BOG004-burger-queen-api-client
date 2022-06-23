import Logout from "../components/Logout";
import Restaurant from "../components/Restaurant";
import React, { useState, useEffect } from 'react';
import Timekeeper from "../components/Timekeeper";

export default function Chef() {
  const [listOrders, setListOrders] = useState([])

  useEffect(() => {
    getOrder("pending")

  }, [])


  const getOrder = (status) => {
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
          if (order.status === status) {
            const client = order.client
            const status = order.status
            const products = order.products
            const dataEntry = order.dataEntry

            arrOrders.push({ client, status, products, dataEntry })
            setListOrders(arrOrders)
          } else if (order.status === status){
            const client = order.client
            const status = order.status
            const products = order.products
            const date = order.dataEntry
            const dataEntry = date.slice(-8)
            console.log("hora", typeof(date))

            arrOrders.push({ client, status, products, dataEntry })
            setListOrders(arrOrders)
          }


        });
        //console.log("arrOrders", arrOrders)
        // setListOrders(arrOrders)
      })

      .catch(error => console.error('Error:', error))
  }
  const handleClick = (status) => {
    getOrder(status)
  }
  // const time = listOrders.map((order) => order.products.map((product) => product.product.dateEntry))
  // console.log("time ", time)



  return (
    <div className="chef">
      <Logout />
      <Restaurant />
      <header className="header">
      </header>
      <section>
        <div className="order">
          <button className='input-buttons' id="breakfast" onClick={() => handleClick("pending")} >PENDIENTES</button>
          <button className='input-buttons' id="today-menu" onClick={() => handleClick("delivering")}>LISTOS</button>
        </div>
      </section>
      <div className="data-div-chef">
        <ul >
          {/* {console.log("selected", listOrders)} */}
          {listOrders.map((order, index) =>

            <li key={index} className="data-chef">
              <p> Cliente: {order.client}</p>
              <p>Productos</p>

              {
                order.products.map((product, i) => (
                  <div key={i + 1000}>

                    <p>{product.qty} x {product.product.name}</p>
                    <p></p>
                  </div>
                ))
              }
              {/* {console.log("dataEntry", order)} */}
              {/* <p>{order.dataEntry}</p> */}
              <Timekeeper/>
              <button className="listo">Listo</button>
            </li>
          )}
        </ul>
      </div>

    </div>
  )
}
