import React from 'react';
import Restaurant from "../components/Restaurant";
import { useNavigate } from "react-router-dom";

const Login = () =>  {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/roles')
  }

  return (
    <div className='login'>
        <Restaurant/>
        <h2>Login</h2>
        <h3> Name </h3>
        <input type="text"/>
        <h3> Password </h3>
        <input type="password"/>
        <button className='input-login' onClick={handleClick}> Sign In  </button>
    </div>
  )
}

export default Login; 