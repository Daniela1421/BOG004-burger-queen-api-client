import React from 'react'
import Restaurant from "../components/Restaurant";
import { useNavigate } from "react-router-dom";

const Roles = () => {
    const navigate = useNavigate();
    const handleClick = (route) => {
        navigate(route)
    }

    return (
        <div className='roles'>
            <Restaurant />
            <button className='input-roles'  onClick={()=>handleClick('/chef')}> Jefe de cocina  </button>
            <button className='input-roles'  onClick={()=>handleClick('/boss')}> Administrador  </button>
            <button className='input-roles'  onClick={()=>handleClick('/waiter')}> Mesero  </button>

        </div>
    )
}

export default Roles; 