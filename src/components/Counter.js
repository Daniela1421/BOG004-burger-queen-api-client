import React, { useState, /*useRef*/ } from 'react';

export default function Counter({ price, createCounter, amount }) {
  //const [amount, setAmount] = useState(1)
  //const totalProducts = useRef(price)
  //const [total, setTotal] = useState(0)

  // useEffect(() => {
  //   const nuevoTotal = pedido.reduce((total, price) => (amount * price) + total, 0)
  //   setTotal(nuevoTotal)
  // }, [pedido])
  // const total2 = setTotal(amount * price)
  // console.log("total", total2)


  return (
    <>
      <div className="amount">
        <button className='buttonAmount' id="add" onClick={() => { if (amount >= 1) { createCounter("increase" ) } }}>+</button>
        <h4>{amount}</h4>
        <button className='buttonAmount' id="decrease" onClick={() => { if (amount > 1) { createCounter("") } }}>-</button>
      </div>
      <h4 /*ref={totalProducts}*/>{amount * price}</h4>
    </>
  )
}

