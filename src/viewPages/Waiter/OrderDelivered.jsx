import React from 'react'
// import  Chef	from '../Chef'
import Logout from '../../components/Logout'
import Restaurant from '../../components/Restaurant'


const OrderDelivered = () => {
	// const [OrdersDelivered, setOrdersDelivered] = useState([])
	// getOrder()
		return (
    <div className="chef">
      <Logout />
      <Restaurant />
    <header className="header">
    </header>
    <section>
      <div className="order">
        <ul>
          <li>LISTOS</li>
        </ul>
      </div>
    </section>
    <div className="data-div-chef">
      <ul >
        {/* {console.log("selected", listOrders)} */}
        {/* {OrderDelivered.map((order, index) =>
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
           <p>{order.status}</p> */}
           {/* <button className="listo">Listo</button>
          </li>
        )} */}
      </ul>
    </div>

    </div>
  )
}
export  default OrderDelivered
