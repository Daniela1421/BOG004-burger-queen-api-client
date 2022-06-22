import React, {useState, useEffect} from 'react'
// import  Chef	from '../Chef'
import Logout from '../../components/Logout'
import Restaurant from '../../components/Restaurant'
import back from '../../images/back.png'
import { useNavigate } from "react-router-dom";


export default function OrderDelivered () {
  const [orderDelivering, setOrderDelivering] = useState([])

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
        console.log("orders delivered", data)
        const arrOrders = [];
        data.forEach(order => {
          if (order.status === "delivered") {
            const client = order.client
            const status = order.status
            const products = order.products

            arrOrders.push({ client, status, products })
            setOrderDelivering(arrOrders)
          }
        })
        console.log(arrOrders)
      })
  }
 
  const navigate = useNavigate();
  const handleBack = () =>{
    navigate('/waiter')
  }

		return (
    <div className="chef">
      <img src={back} alt="Atrás" onClick={handleBack}/>
      <Logout />
      <Restaurant />
    {/* <header className="header">
    </header> */}
    <section>
      <div className="order">
        <ul>
          <li>LISTOS</li>
        </ul>
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
            </li>
          )}
      </ul>
    </div>

    </div>
  )
}
//export  default OrderDelivered
