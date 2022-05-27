import { Navigate} from 'react-router-dom';

const RequireAuth = ({children}) => {
    const Islogin= localStorage.getItem('user')
    if(Islogin === true){
        return children
    } else {
        return <Navigate to="/"/>
    }
}

export default RequireAuth
