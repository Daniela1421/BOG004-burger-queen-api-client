import Logout from "../components/Logout";
import Restaurant from "../components/Restaurant";
import React, { /*createContext*/ useState, useRef } from 'react';
import add from "../images/add.svg"
import { ProductsResume } from "../components/ProductsResume";

export default function Waiter() {
  const [products, setProducts] = useState([])
  const [productsSelected, setProductsSelected] = useState([])
  const [client, setClient] = useState("")
  //const [amount, setAmount] = useState(1)
  const totalPricePerProduct = useRef()
  console.log("prueba forward", totalPricePerProduct.current /*.priceTotal()*/)
  //const [total, setTotal] = useState(0)
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
        //console.log('Success:', data)
      })

      .catch(error => console.error('Error:', error))
  }

  const handleClick = (menu) => {
    validateHttpProducts(menu)
  }

  const handleSetProducts = (product) => {
    // console.log("handleSetProducts", product)
    // product.qty = 1
  
    setProductsSelected([product].concat(productsSelected))
  }
  console.log("productsSelected", productsSelected)
  const productDelete = (id) => {
    console.log("productDelete", id)
    const newArr = productsSelected.filter((item) => item.id !== id);
    setProductsSelected(newArr);
  }

  // const updateQuantities = (productId, operationType) => {
  //   console.log("quantity", productId, operationType)
  //   setProductsSelected(currentProducts => {
  //     const productList = currentProducts.map((product) =>{
  //     if(product.id === productId){
  //       if(operationType === "add"){
  //         product.quantity = product.quantity + 1
  //       }else {
  //         product.quantity = product.quantity - 1
  //       }
  //     }
  //     return product
  //    });
  //    return productList
  //   })
  // }

  // const amountPrice = totalPricePerProduct.current; 
  // console.log("prueba forwardRef ", amountPrice)

  // const sendOrder = () => {
    console.log ("objeto", {
      id: 1, 
      userId: 1, 
      client: client, 
      products: [
        { /*qty: product.quantity,*/
          product: {
            productsSelected
          }
        }
      ],
      status: "pending", 
      dataEntry: "04/06/2022", 
    })
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
                {/* <button type="button" className='add-products'id="add-products" onClick={() => handleSetProducts(product)}>Agregar</button> */}
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
          <ProductsResume productsSelected={productsSelected} setProductsSelected={setProductsSelected} productDelete={productDelete} ref={totalPricePerProduct} /*updateQuantities={updateQuantities}*//>
            {/* {console.log("selected", productsSelected)}
            {productsSelected.map((product) =>
              // <totalContext>
               
              // </totalContext>

            )} */}
          </ul>
        </div>
        <div className="total">
          <ul>
            <li>TOTAL</li>
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