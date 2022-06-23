import Logout from "../../components/Logout";
import Restaurant from "../../components/Restaurant";
import React, { useState, useEffect } from 'react';
import add from "../../images/add.svg"
import { ProductsResume } from "../../components/ProductsResume";
import { useNavigate } from "react-router-dom";
import { Modal } from "../Modal";
// import moment from "moment";


export default function Waiter() {
  const [products, setProducts] = useState([])
  const [productsSelected, setProductsSelected] = useState([])
  const [client, setClient] = useState("")
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    validateHttpProducts("Desayuno")

  }, [])
 
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
              image: products.image,
              type: products.type,
              dataEntry: products.dataEntry
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
              quantity: 1,
              image: products.image,
              type: products.type,
              dataEntry: products.dataEntry
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

  const navigate = useNavigate();
  const handleDelivered = () => {
    navigate("/waiter/OrderDelivered")
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
  
  const priceTotal = priceQuantity.reduce((price1, price2) => price1 + price2 , 0)

  const handleCancel = () => {
    // setProductsSelected([])
    // setClient('')
    setShowModal(true)
  }
  

  const sendOrder = () => {
    // const date = moment().format("YYYY-MM-Do HH:mm:ss");;
    const objArray = productsSelected.map((product) => {
      return {
        qty: product.quantity,
        product: { 
          "id": product.id,
          "name": product.name,
          "price": product.price,
          "image": product.image,
          "type": product.type,
          "dateEntry": product.dateEntry
        } 
      }

    })
    const userID = localStorage.getItem("uid")
    return {
      id: Math.random(),
      userId: userID,
      client: client, 
      products: objArray,
      status: "pending", 
      // dateEntry: date, 
    }
 }
 
const sendOrderAPI = () =>{
 fetch(`${urlApi}/orders`, {
  method: 'POST',
  body: JSON.stringify(sendOrder()), 
  headers: {
    'Content-Type': 'application/json',
    'authorization': 'Bearer ' + localStorage.getItem('userToken'),
  }
})

  .then(res => res.json())

  .then(data => {
   console.log(data)
   setProductsSelected([])
   setClient('')
  })
  .catch(error => console.error('Error:', error))
}



  return (
    <div className='waiter'>
        <Logout />
        <Restaurant />
      <header>
        <div>
          <button className='input-buttons' id="breakfast" onClick={() => handleClick("Desayuno")} >DESAYUNO</button>
          <button className='input-buttons' id="today-menu" onClick={() => handleClick("Almuerzo")}>ALMUERZO</button>
        </div>
      </header>
      <section>
        <div className="info">
          <ul>
            <li>CLIENTE</li>
            <li>PRODUCTO</li>
            <li>PRECIO C/U</li>
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
        <div className="resume">
          <ul>
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
      <section>
        <div className="buttonsDelivered">
        <button className='input-buttons' onClick={sendOrderAPI}>ENVIAR</button>
        <button className='input-buttons' onClick={handleCancel}>CANCELAR</button>
        <button className='input-buttons' onClick={handleDelivered}>PEDIDOS LISTOS</button>
        </div>
      </section>
      {
        showModal && (
          <Modal />
        )
      }
    </div>
  )
}