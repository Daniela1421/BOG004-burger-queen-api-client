// import React from 'react'
// import Restaurant from "../components/Restaurant";
// import { useNavigate } from "react-router-dom";

// const Roles = () => {
//     const userRol = JSON.parse(localStorage.getItem('userRol'))
//     console.log("userRol", userRol.mesero);
//     const navigate = useNavigate();
//     const identifyRole = () => {
//         if(userRol.mesero === true ){
//             navigate('/waiter')
//         } else{
//             navigate('/chef')
//         }
    
//     }
//     const handleClick = () => {
//         //navigate(route)
//         identifyRole()
//     }

//     return (
//         <div className='roles'>
//             <Restaurant />
//             <button className='input-roles'  onClick={handleClick}> JEFE DE COCINA  </button>
//             {/* <button className='input-roles'  onClick={()=>handleClick('/boss')}> ADMINISTRADOR  </button> */}
//             <button className='input-roles'  onClick={handleClick}> MESERO  </button>

//         </div>
//     )
// }

// export default Roles; 