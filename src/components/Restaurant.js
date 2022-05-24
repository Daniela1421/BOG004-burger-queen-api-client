import React from 'react'
import Logo from '../images/logo.svg'


const Restaurant = () =>  {
  return (
    <header>
    <img className="logo" src={Logo} alt='Logo'></img>

    <h1> BURGER QUEEN </h1>
    </header>
  )
}

export default Restaurant;