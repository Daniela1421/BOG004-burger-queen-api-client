// import React, { useState, useImperativeHandle, forwardRef} from 'react';

// const Counter = forwardRef(({ price }, ref) => {
//   // const [amount, setAmount] = useState(1)
//   //const [total, setTotal] = useState()
//   // const totalPricePerProduct = useRef()
//   // const arrPrice = []
//   // const amountPrice = totalPricePerProduct.current; 
//   //   console.log("prueba fuera de useeffect ", amountPrice)
//   // arrPrice.push(amountPrice)

//   // console.log("arrPrice ", arrPrice);
//   // useEffect(() => {
//   //   console.log("settotal", setTotal(totalPricePerProduct.current))
    
//   // }, [amount])
//   // const priceTotal = () => setTotal(total)

//   // useImperativeHandle(ref, () => {
//   //   return {
//   //     priceTotal,
//   //     ref
//   //   }
//   // })

//   return (
//     <>
//       <div className="amount">
//         <button 
//           className='buttonAmount' 
//           id="add" 
//           onClick={() => {
//             if (amount >= 1) {
//               setAmount(amount + 1)
//             }
//             // setTotal(currentTotal => currentTotal + price)
//           }}>+
//         </button>
//         <h4>{amount}</h4>
//         <button 
//           className='buttonAmount' 
//           id="decrease" 
//           onClick={() => { 
//             if (amount > 1) { 
//               setAmount(amount - 1) 
//             } 
//           }}>-
//         </button>
//       </div>
//       <h4 ref={ref} >{amount * price}</h4>

//     </>
//   )
// }); 

// export default Counter; 
 //const totalProducts = useRef(price)
  //const [total, setTotal] = useState(0)

  // useEffect(() => {
  //   const nuevoTotal = pedido.reduce((total, price) => (amount * price) + total, 0)
  //   setTotal(nuevoTotal)
  // }, [pedido])
  // const total2 = setTotal(amount * price)
  // console.log("total", total2)