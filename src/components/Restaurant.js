import React from 'react'
import Logo from '../images/logo.svg'


const Restaurant = () =>  {
  return (
    <header className='restaurant'>
    <img className="logo" id='view-logo' src={Logo} alt='Logo'></img>

    <h1 id='nameRestaurant'> BURGER QUEEN </h1>
    </header>
  )
}

export default Restaurant;