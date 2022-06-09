import Logout from "../components/Logout";
import Restaurant from "../components/Restaurant";
import React, { useState } from 'react';
import Delete from "../images/delete.svg"
import add from "../images/add.png"
import Counter from "../components/Counter";

export default function Waiter() {
  const [products, setProducts] = useState([])
  const [productsSelected, setProductsSelected] = useState([])
  const [client, setClient] = useState("")
  // console.log("client", client)
  // const UpdateClient = client; 
  const urlApi = 'http://localhost:8080';
  const validateHttpProducts = (menu) => {

    fetch(`${urlApi}/products`, {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + localStorage.getItem('userToken'),
      }
    })
    
   .then(res => res.json())
   
   .then(data => {
    const arrProducts = []
    // const arrayIDs = []
    data.forEach((products) => {

        if(products.type === menu){
          const productsName = products.name; 
          let productsPrice = products.price;
          let productsId = products.id;
          arrProducts.push({
            name: productsName,
            id: productsId,
            price: productsPrice
          })
          setProducts(arrProducts);
         } else if(products.type === menu){
          //console.log("products almuerzo", products.name, products.image)
          const productsName = products.name; 
          let productsPrice = products.price;
          let productsId = products.id;
          arrProducts.push({
            name: productsName,
            id: productsId,
            price: productsPrice
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
    console.log("handleSetProducts", product)
    product.qty = 1
  //  console.log("producto con concat", [product].concat(productsSelected) )
   setProductsSelected([product].concat(productsSelected))
 }

 const handleDelete = (id) => {
  // console.log("delete", id );
  // console.log("delete filter", productsSelected.filter((item) => item.id !== id) )
  const newArr = productsSelected.filter((item) => item.id !== id);
  setProductsSelected(newArr);
};
   
  return (
      <div className='waiter'>
        <header className="header">
        <div className="menu">
          <button className='input-buttons' id="breakfast" onClick={() => handleClick("Desayuno")} >DESAYUNO</button>
          <button className='input-buttons' id="today-menu" onClick={() => handleClick("Almuerzo")}>ALMUERZO</button>
        </div>
        <Restaurant/>
        <Logout/>
        </header>
        <section className="Orders">
          <div className="info">
            <ul>
              <li>CLIENTE</li>
              <li>PRODUCTO</li>
              <li>PRECIO U.</li>
            </ul>
          </div>
          <div className="data">
          <input type="text" className='user-name' placeholder="CLIENTE" value={client} onChange={(e) => { setClient(e.target.value);}} />
          <ul className="infoProducts">
            {products.map((product) =>
            <div key={product.id}>
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
                <li>CANTIDAD</li>
                <li>PRECIO TOTAL</li>
              </ul>
          </div>
          <h3>{client}</h3>
          <div>
          <ul className="infoProductsResume">
            {console.log("selected", productsSelected)}
            {productsSelected.map((product) =>
            <div key={product.id}>
            <li>{product.name}</li>
            <img className="delete" id='view-delete' src={Delete} alt='Delete' onClick={() => handleDelete(product.id)}></img>
            <Counter price={product.price}/>
            {/* <li >{product.price}</li> */ console.log(product)}
            
            </div>
            )}
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