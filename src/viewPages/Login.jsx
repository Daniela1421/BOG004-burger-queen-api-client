import Restaurant from "../components/Restaurant";
import { useNavigate } from "react-router-dom";
import React, { useState} from 'react';


const Login = () =>  {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const navigate = useNavigate(); 

const urlApi = 'http://localhost:8080';

const data = {
  "email": email,
  "password": password
};


const validateHttp = (data) => {
 
  
  fetch(`${urlApi}/login`, {
    method: 'POST', 
    body: JSON.stringify(data),
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => {
    console.log('RES', res);
    //console.log('JSON', res.json())
    return res.json()
  })
  .then(response => {
    console.log('Success:', response)
    if(response.accesToken && response.user.roles.admin === false){
      //sessionStorage.setItem('user', response)
      navigate('/roles')
    } else if (response.accesToken && response.user.roles.admin === true){
      navigate('/boss')
    }else{
      
    }
    
  })
  .catch(error => console.error('Error:', error))
}
 const handleClick = () => {
  validateHttp(data)
}

  // const handleClick = () => {
    //   navigate('/roles')
    // }
    //validateHttp(data)
    
    return (
      <div className='login'>
        <Restaurant/>
        <h2>LOGIN</h2>
        <div>
        <h3> EMAIL </h3>
        <input className='input-form' type="text" onChange={(e) => { setEmail(e.target.value);}}/>
        <h3> PASSWORD </h3>
        <input className='input-form' type="password"  onChange={(e) => {setPassword(e.target.value);}}/>
        </div>
        <button className='input-login' onClick={handleClick()}>SIGN IN</button>
    </div>
  )
}

export default Login;


// const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
//   const handle = () => {
 
//     const data = {
//       "email": email,
//       "password": password
//   }
//     console.log(email, password);
//     loginHttp(data);
//   };

//   let urlMock = "http://localhost:8080";
//   const loginHttp = (logObj) => {
//     let url = urlMock + "/";


//   return fetch(url, {
//     method: "POST",
//     body: JSON.stringify(logObj),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//   .then((response) => {
//     console.log('respuesta: ', response);
//     if(!response.ok){
//       throw Error("Confirmar email y contraseña");
//     }
//           return response.json();
//   })
//   .then(logObj => {
//     console.log('success: ', logObj);
//   })
// }
// onChange={(e) => { setEmail(e.target.value);}}     onChange={(e) => {setPassword(e.target.value);}}