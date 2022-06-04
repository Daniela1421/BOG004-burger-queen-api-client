import {useNavigate} from "react-router-dom";

export default function Logout() {
    const Navigate = useNavigate(); 
    const handleClick = () => {
        localStorage.removeItem('userToken');
        localStorage.removeItem('userRol');
       Navigate('/')
    }

  return (
    <button className='input-buttons' id="logout" onClick={handleClick}> SALIR </button>
  )
}


