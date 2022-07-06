import Logout from "../components/Logout";
import Restaurant from "../components/Restaurant";
import React, { useState, useEffect } from 'react';
//import Timekeeper from "../components/Timekeeper";
import { getOrder, changeOrderStatus } from "./fetch";

export default function Chef() {
  const [listOrders, setListOrders] = useState([]);
  //const [time, setTime] = useState()


  useEffect(() => {
    passOrderStatus("pending")

  }, [])

  const urlApi = 'http://localhost:8080';

  const passOrderStatus = (status) => {
    const userToken = localStorage.getItem('userToken')
    getOrder(`${urlApi}/orders`, userToken)
      .then(data => {
        const arrOrders = [];
        data.forEach(order => {
          if (order.status === status) {
            arrOrders.push(order)
            setListOrders(arrOrders)
          } else if (order.status === status) {
            arrOrders.push(order)
            setListOrders(arrOrders)
          }
        });
      })
  }

  const handleClick = (status) => {
    passOrderStatus(status)
  }

  const date = new Date();
  const days = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  const months = date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth();
  const hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  const minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
  const seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()
  const dateProcessed = date.getFullYear() + "-" + months + "-" + days + " " + hours + ":" + minutes + ":" + seconds

  const changeToDelivering = (order) => {
    const url = `${urlApi}/orders/${order.id}`;
    const userToken = localStorage.getItem('userToken')
    const data = {
      status: "delivering",
      dateProcessed: dateProcessed,
    };
    changeOrderStatus(url, userToken, data)
      .then((res) => console.log("prueba patch", res));
    passOrderStatus(order.status)
  };


  // const time = listOrders.forEach((order) =>{
  //   if(order.status === "delivering"){
  //     const firstDate = order.dateEntry; 
  //     const lastDate = order.dateProcessed; 
  //     const difference = lastDate.getTime() - firstDate.getTime()
  //     arrDates.push(difference)
  //   }
  // })
  // console.log("time ", arrDates)


  // const totalTime = []

  listOrders.forEach((order) => {
    if(order.status === "delivering"){
      const dateEntry = Date.parse(order.dateEntry);
      const dateProcessed = Date.parse(order.dateProcessed);
      const totalTimeMilliseconds = dateProcessed - dateEntry;
      const totalTime = Math.trunc(totalTimeMilliseconds / 1000)

      let hour = Math.floor(totalTime / 3600);
      let minutes = Math.floor((totalTime / 60) % 60);
      let seconds = totalTime % 60;

      hour = hour < 10 ? "0" + hour : hour;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      // totalTime.push(`${hour}:${minutes}:${seconds}`); 
      console.log("datenetry", `${hour}:${minutes}:${seconds}`)
    }
    
  })

  // console.log("time format ", totalTime)



  return (
    <div className="chef">
      <div className="headerChef">
        <Restaurant />
        <Logout />
      </div>
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
                  </div>
                ))
              }
              {
                order.status === "pending" && <p>{order.dateEntry}</p>
                // <p>{order.status === "delivering" && Math.round(Math.abs(order.dateProcessed.getTime() - order.dateEntry.getTime()) / (1000 * 60))}</p>
              }
              {
                order.status === "pending" && <button className="listo" onClick={() => changeToDelivering(order)}>{order.status === "pending" && "LISTO"}</button>
              }
              
                {/* <Timekeeper order={order} /> 
               */}

              {/* ) */}
              {/* } */}
              {/* </div> */}
            </li>
          )}
        </ul>
      </div>

    </div>
  )
}


// {/* {console.log("dataEntry", order.id)} */ }
// {/* <p>{order.dataEntry}</p> */ }
// {/* <p>{order.status === "delivering" && <Timekeeper order={order}/>}</p> */ }
// {/* <div> */ }

// {/* {order.status === "delivering" && (
//                 <Timekeeper order={order}/>
//               )} */}
// {/* {
//                 order.status === "pending" && ( */}
