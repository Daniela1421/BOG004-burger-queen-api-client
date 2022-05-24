import React from 'react'
import Restaurant from "../components/Restaurant";
import { useNavigate } from "react-router-dom";

const Roles = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/orders')
    }

    return (
        <div className='roles'>
            <Restaurant />
            <button className='input-roles' id='chef' onClick={handleClick}> Jefe de cocina  </button>
            <button className='input-roles' id='boss' onClick={handleClick}> Administrador  </button>
            <button className='input-roles' id='waiter' onClick={handleClick}> Mesero  </button>

        </div>
    )
}

export default Roles; 