import React, { useState, useEffect } from 'react'
import Logout from '../../components/Logout'
import Restaurant from '../../components/Restaurant'
import Arrow from '../../images/Arrow.svg'
import { useNavigate } from "react-router-dom";
import { getOrder, changeOrderStatus } from "../fetch";


export default function OrderDelivered() {
  const [orderDelivering, setOrderDelivering] = useState([])

  useEffect(() => {
    passOrderStatus('delivering')

  }, [])

 
  const urlApi = 'http://localhost:8080';
  
  const passOrderStatus = (status) =>{
    const userToken = localStorage.getItem('userToken')
    getOrder(`${urlApi}/orders`, userToken)
    .then(data => {
      console.log(data)
      const arrOrders = [];
      data.forEach(order => {
        if (order.status === status) {
          arrOrders.push(order)
          setOrderDelivering(arrOrders)
        } else if (order.status === status) {
          arrOrders.push(order)
          setOrderDelivering(arrOrders)
        }
      });
    })
  }

  const handleClick = (status) => {
    passOrderStatus(status)
  }

  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/waiter')
  }

  const changeToDelivered = (order) => {
    const userToken = localStorage.getItem('userToken');
    const url = `${urlApi}/orders/${order.id}`;
    const data = {
      status: "delivered",
    };
    changeOrderStatus(url, userToken, data)
    .then((res) => console.log("prueba patch", res));
    passOrderStatus(order.status)
  };

  const changeToCancel = (order) => {
    const userToken = localStorage.getItem('userToken');
    const url = `${urlApi}/orders/${order.id}`;
    const data = {
      status: "canceled",
      dateProcessed: new Date(),
    };
    changeOrderStatus(url, userToken, data)
    .then((res) => console.log("prueba patch", res));
    passOrderStatus(order.status)
  };

  return (
    <div className="waiter">
      <header className="header">
        <img className='Back' src={Arrow} alt="Atrás" onClick={handleBack}/>
        <Restaurant />
        <Logout />
      </header>
      <section>
        <div className="orderWaiter">
          <button className='input-buttons' id="pending" onClick={() => handleClick("pending")} >PENDIENTES</button>
          <button className='input-buttons' id="delivering" onClick={() => handleClick("delivering")} >PARA ENTREGAR</button>
          <button className='input-buttons' id="delivered" onClick={() => handleClick("delivered")}>ENTREGADOS</button>
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
              {
                (order.status === "delivering" || order.status === "pending") &&
                <button className="listo" onClick={() => order.status === "delivering" ? changeToDelivered(order) : (order.status === "pending" && changeToCancel(order))}>{
                  order.status === "delivering" ? "ENTREGAR" : (order.status === "pending" && "CANCELAR")
                }</button>
              }
            </li>
          )}
        </ul>
      </div>

    </div>
  )
}

