import React, { useState } from 'react';
import Restaurant from "../components/Restaurant";
import { useNavigate } from "react-router-dom";

const Login = () =>  {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handle = () => {
 
    const data = {
      "email": email,
      "password": password
  }
    console.log(email, password);
    loginHttp(data);
  };

  let urlMock = "http://localhost:8080";
  const loginHttp = (logObj) => {
    let url = urlMock + "/";


  return fetch(url, {
    method: "POST",
    body: JSON.stringify(logObj),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    console.log('respuesta: ', response);
    if(!response.ok){
      throw Error("Confirmar email y contraseña");
    }
          return response.json();
  })
  .then(logObj => {
    console.log('success: ', logObj);
  })
}
const navigate = useNavigate();
  const handleClick = () => {
    navigate('/roles')
  }

  return (
    <div className='login'>
        <Restaurant/>
        <h2>LOGIN</h2>
        <div>
        <h3> NAME </h3>
        <input className='input-form' type="text" onChange={(e) => { setEmail(e.target.value);}} />
        <h3> PASSWORD </h3>
        <input className='input-form' type="password" onChange={(e) => {setPassword(e.target.value);}}/>
        </div>
        <button className='input-login' onClick={[handleClick, handle] }>SIGN IN</button>
    </div>
  )
}

export default Login;
