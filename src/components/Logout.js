import {useNavigate} from "react-router-dom";

export default function Logout() {
    const Navigate = useNavigate(); 
    const handleClick = () => {
        localStorage.removeItem('userToken');
       Navigate('/')
    }

  return (
    <button className='input-logout'  onClick={handleClick}> LOGOUT </button>
  )
}


