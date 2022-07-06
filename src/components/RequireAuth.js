import { Navigate} from 'react-router-dom';
import Waiter from '../viewPages/Waiter/Waiter';
import Chef from '../viewPages/Chef';

const RequireAuth = ({children}) => {
    const isLogin = localStorage.getItem('userToken')
    const userRol = localStorage.getItem('userRol')
    if(isLogin !== null && userRol === 'waiter'){
        return <Waiter/> 
    } else if(isLogin !== null && userRol === 'chef'){
        return <Chef/>
    } else if(isLogin !== null){
        return children
    } else if(isLogin === null){
        return <Navigate to="/"/>
    }
}

export default RequireAuth
