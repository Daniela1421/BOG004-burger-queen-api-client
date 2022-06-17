import Logout from "../components/Logout";
import Restaurant from "../components/Restaurant";
import React, { useState } from 'react';
import add from "../images/add.svg"
import { ProductsResume } from "../components/ProductsResume";

export default function Waiter() {
  const [products, setProducts] = useState([])
  const [productsSelected, setProductsSelected] = useState([])
  const [client, setClient] = useState("")
 
  const urlApi = 'http://localhost:8080';

  const validateHttpProducts = (menu) => {

    fetch(`${urlApi}/products`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + localStorage.getItem('userToken'),
      }
    })

      .then(res => res.json())

      .then(data => {
        const arrProducts = []
        // const arrayIDs = []
        data.forEach((products) => {

          if (products.type === menu) {
            const productsName = products.name;
            let productsPrice = products.price;
            let productsId = products.id;
            arrProducts.push({
              name: productsName,
              id: productsId,
              price: productsPrice,
              quantity: 1,
            })
            setProducts(arrProducts);
          } else if (products.type === menu) {
            const productsName = products.name;
            let productsPrice = products.price;
            let productsId = products.id;
            arrProducts.push({
              name: productsName,
              id: productsId,
              price: productsPrice,
              quantity: 1
            })
            setProducts(arrProducts);
          }

        })
        console.log(arrProducts)
      })

      .catch(error => console.error('Error:', error))
  }

  const handleClick = (menu) => {
    validateHttpProducts(menu)
  }

  const handleSetProducts = (product) => {
    setProductsSelected([product].concat(productsSelected))
  }
  
  const productDelete = (id) => {
    const newArr = productsSelected.filter((item) => item.id !== id);
    setProductsSelected(newArr);
  }
 
  const priceQuantity = productsSelected.map((product) => {
    const pricePerProduct = product.quantity * product.price
    return pricePerProduct;
  })
  
  //console.log("price quantity", priceQuantity)
  
  const priceTotal = priceQuantity.reduce((price1, price2) => price1 + price2 , 0)
  //console.log("pricetotal", priceTotal)
  

  // const sendOrder = () => {
    // console.log ("objeto", {
    //   id: 1, 
    //   userId: 1, 
    //   client: client, 
    //   products: [
    //     { qty: productsSelected.quantity,
    //       product: {
    //         productsSelected
    //       }
    //     }
    //   ],
    //   status: "pending", 
    //   dataEntry: "04/06/2022", 
    // })
 // }
  // console.log("orden final", sendOrder())

  return (
    <div className='waiter'>
      <header className="header">
        <div className="menu">
          <button className='input-buttons' id="breakfast" onClick={() => handleClick("Desayuno")} >DESAYUNO</button>
          <button className='input-buttons' id="today-menu" onClick={() => handleClick("Almuerzo")}>ALMUERZO</button>
        </div>
        <Restaurant />
        <Logout />
      </header>
      <section className="Orders">
        <div className="info">
          <ul>
            <li>CLIENTE</li>
            <li>PRODUCTO</li>
            <li>PRECIO UD</li>
          </ul>
        </div>
        <div className="data">
          <input type="text" className='user-name' placeholder="CLIENTE" value={client} onChange={(e) => { setClient(e.target.value); }} required />
          <ul>
            {products.map((product) =>
              <div className="infoProducts" key={product.id}>
                <img className="add" id='add-product' src={add} alt='Agregar' onClick={() => !productsSelected.includes(product) && handleSetProducts(product)}></img>
                <li>{product.name}</li>
                <li >{product.price}</li>
              </div>
            )}
          </ul>
        </div>
      </section>
      <section>
        <div className="resume">
          <ul>
            <li>RESUMEN</li>
            <li>PRECIO </li>
          </ul>
        </div>
        <h3 className="client-resume">{client}</h3>
        <div>
          <ul className="priceAmountProduct">
          <ProductsResume productsSelected={productsSelected} setProductsSelected={setProductsSelected} productDelete={productDelete}/>
          </ul>
        </div>
        <div className="total">
          <ul>
            <li>TOTAL</li>
            <li>{priceTotal}</li>
          </ul>
        </div>
      </section>
      <section className="send-cancel">
        <button className='input-buttons' /*onClick={handleClick}*/>ENVIAR</button>
        <button className='input-buttons' /*onClick={handleClick}*/>CANCELAR</button>
      </section>
    </div>
  )
}