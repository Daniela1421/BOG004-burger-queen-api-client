// // import React from 'react'
// // import { getOrder } from '../viewPages/fetch';
// // import { useState, useEffect } from "react";

// export default function Timekeeper({order}) {
//   let total; 
//   if(order.status === "delivering"){
//     const dateEntry = Date.parse(order.dateEntry);
//     const dateProcessed = Date.parse(order.dateProcessed); 
//     const totalTimeMilliseconds = dateProcessed - dateEntry; 
//     const totalTime = Math.trunc(totalTimeMilliseconds/1000)
    
//     let hour = Math.floor(totalTime/3600); 
//     let minutes = Math.floor((totalTime/60) % 60); 
//     let seconds = totalTime % 60; 

//     hour = hour < 10 ? "0" + hour : hour; 
//     minutes = minutes < 10 ? "0" + minutes : minutes; 
//         seconds = seconds < 10 ? "0" + seconds : seconds; 

//     return total +=`${hour}:${minutes}:${seconds}`; 
  
//   }

//   return (
//     <div className='timekeeper' /*onClick={start}*/>
//         <h2 className='timer'>{total}</h2>
//     </div>
//   )
// }

 // const [dates, setDates] = useState([])
  // const [totalTime, setTotalTime] = useState()

  // useEffect(() => {
  //   passOrderStatus("delivering")

  // }, [])

  // const urlApi = 'http://localhost:8080';
  // const userToken = localStorage.getItem('userToken')

  // passOrderStatus = (status) => {
  //   getOrder(`${urlApi}/orders`, userToken)
  //   .then(data => {
  //     // console.log("tiempo", data)
  //     const arrTimes = [];
  //     data.forEach(order => {
  //       if (order.status === status) {
  //         const dateEntry = order.dateEntry; 
  //         const dateProcessed = order.dateProcessed; 
  //         arrTimes.push({dateEntry, dateProcessed})
  //         setDates(arrTimes)
  //        };
  //     })
  //     console.log("arr times", arrTimes)
  //   })

  // }
    
  // const handleClick = (status) => {
  //   passOrderStatus(status)
  // }
