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
            <button className='input-roles'  onClick={()=>handleClick('/chef')}> JEFE DE COCINA  </button>
            <button className='input-roles'  onClick={()=>handleClick('/boss')}> ADMINISTRADOR  </button>
            <button className='input-roles'  onClick={()=>handleClick('/waiter')}> MESERO  </button>

        </div>
    )
}

export default Roles; 