// // // import React from 'react'
// // // import { getOrder } from '../viewPages/fetch';
// // // import { useState, useEffect } from "react";

// export default function Timekeeper({order}) {
//     // console.log(order.dateProcessed)
//     // console.log("entry", order.dateEntry)
//     const dateEntry = Date.parse(order.dateEntry);
//     const dateProcessed = Date.parse(order.dateProcessed); 
//     const totalTimeMilliseconds = dateProcessed - dateEntry; 
//     const totalTime = Math.trunc(totalTimeMilliseconds/1000)
    
    
//     let hour = Math.floor(totalTime / 3600);
//   hour = hour < 10 ? "0" + hour : hour;

//   let minute = Math.floor((totalTime / 60) % 60);
//   minute = minute < 10 ? "0" + minute : minute;

//   let seconds = totalTime % 60;
//   seconds = seconds < 10 ? "0" + seconds : seconds;
    

// const finalTime = parseInt(hour) 
//   console.log("final", typeof finalTime)
  

//   return (
//     <div className="timer">
//       {/* <img src={temporizador} alt="temporizador"/> */}
//       {finalTime}
//     </div>
//   )
// }

//  // const [dates, setDates] = useState([])
//   // const [totalTime, setTotalTime] = useState()

//   // useEffect(() => {
//   //   passOrderStatus("delivering")

//   // }, [])

//   // const urlApi = 'http://localhost:8080';
//   // const userToken = localStorage.getItem('userToken')

//   // passOrderStatus = (status) => {
//   //   getOrder(`${urlApi}/orders`, userToken)
//   //   .then(data => {
//   //     // console.log("tiempo", data)
//   //     const arrTimes = [];
//   //     data.forEach(order => {
//   //       if (order.status === status) {
//   //         const dateEntry = order.dateEntry; 
//   //         const dateProcessed = order.dateProcessed; 
//   //         arrTimes.push({dateEntry, dateProcessed})
//   //         setDates(arrTimes)
//   //        };
//   //     })
//   //     console.log("arr times", arrTimes)
//   //   })

//   // }
    
//   // const handleClick = (status) => {
//   //   passOrderStatus(status)
//   // }
