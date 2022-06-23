import React, { useState, useEffect } from 'react'
// import  Chef	from '../Chef'
import Logout from '../../components/Logout'
import Restaurant from '../../components/Restaurant'
import back from '../../images/back.png'
import { useNavigate } from "react-router-dom";


export default function OrderDelivered() {
  const [orderDelivering, setOrderDelivering] = useState([])

  useEffect(() => {
    getOrder('delivering')

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
        console.log("orders delivered", data)
        const arrOrders = [];
        data.forEach(order => {
          if (order.status === status) {
            const client = order.client
            const status = order.status
            const products = order.products
            const dataEntry = order.dataEntry

            arrOrders.push({ client, status, products, dataEntry })
            setOrderDelivering(arrOrders)
          } else if (order.status === status) {
            const client = order.client
            const status = order.status
            const products = order.products
            const dataEntry = order.dataEntry

            arrOrders.push({ client, status, products, dataEntry })
            setOrderDelivering(arrOrders)
          }
        })
        console.log(arrOrders)
      })
  }

  const handleClick = (status) => {
    getOrder(status)
  }

  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/waiter')
  }

  return (
    <div className="chef">
      <header className="header">
        <img src={back} alt="Atrás" onClick={handleBack} />
        <Logout />
        <Restaurant />
      </header>
      <section>
        <div className="order">
          <button className='input-buttons' id="breakfast" onClick={() => handleClick("pending")} >PENDIENTES</button>
          <button className='input-buttons' id="breakfast" onClick={() => handleClick("delivering")} >PARA ENTREGAR</button>
          <button className='input-buttons' id="today-menu" onClick={() => handleClick("delivered")}>ENTREGADOS</button>
        </div>
      </section>
      <div className="data-div-chef">
        <ul >
          {orderDelivering.map((order, index) =>

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
              <p>{order.status}</p>
              <button className="listo">{
                order.status === "delivering" ? "ENTREGAR" : (order.status === "pending" && "CANCELAR")
              }</button>
            </li>
          )}
        </ul>
      </div>

    </div>
  )
}
//export  default OrderDelivered
