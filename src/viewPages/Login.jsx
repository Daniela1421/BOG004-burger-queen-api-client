import Restaurant from "../components/Restaurant";
import { useNavigate } from "react-router-dom";
import React, { useState} from 'react';

const Login = () =>  {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [error, setError] = useState('');
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
    return res.json()
  })
  .then(response => {
    console.log('Success:', response)
    localStorage.setItem('userToken', response.accessToken)
    if(response.accessToken && response.user.roles.waiter === true){
      navigate('/waiter')
      localStorage.setItem('userRol', "waiter")
    } else if (response.accessToken && response.user.roles.chef === true){
      navigate('/chef')
      localStorage.setItem('userRol', "chef")
    } else if (response.accessToken && response.user.roles.admin === true){
      navigate('/boss')
      //localStorage.setItem('userRol', "boss")
    }else{
      switch (response) {
        case "Email and password are required":
          setError("Correo y contraseña son requeridos")
          break;
        case "Email format is invalid":
          console.log("format");
          setError("Formato de correo inválido")
          break;
        case "Incorrect password":
          console.log("password");
          setError("Contraseña incorrecta")
          break;
        case "Password is too short":
          console.log("short");
          setError("Contraseña demasiado corta")
          break;
        case "Cannot find user":
          console.log("no find user");
          setError("Usuario no encontrado")
          break;
        default:
          break;
      }
    }
    
  })
  .catch(error => console.error('Error:', error))
}

const handleClick = () => {
  validateHttp(data)
}

//localStorage.removeItem('userRol')
 
    return (
      <div className='login'>
        <Restaurant/>
        <h2>LOGIN</h2>
        <div>
        <h3> EMAIL </h3>
        <input className='input-form' type="text" value={email} onChange={(e) => { setEmail(e.target.value);}}/>
        <h3> PASSWORD </h3>
        <input className='input-form' type="password" value={password} onChange={(e) => {setPassword(e.target.value);}}/> 
        </div>
        <h3 className="messajeError">{error}</h3>
        <button className='input-login' onClick={handleClick}>SIGN IN</button>
    </div>
  )
}

export default Login;
