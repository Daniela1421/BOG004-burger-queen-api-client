// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./viewPages/Login";
//import Roles from "./viewPages/Roles";
import NotFoundPage from "./viewPages/NotFoundPage";
// import Navigation from "./components/Navigation";
import Waiter from "./viewPages/Waiter/Waiter";
import Chef from "./viewPages/Chef";
import Administrator from "./viewPages/Administrator";
import RequireAuth from "./components/RequireAuth";
import OrderDelivered  from "./viewPages/Waiter/OrderDelivered";
import  Modal from "./viewPages/Modal"


const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <div className="menu">
          <Navigation/>
        </div> */}
        <Routes>
          <Route path="" element={<Login />} />
          
            {/* <Route path="/roles" element={<RequireAuth><Roles /></RequireAuth>} /> */}
            <Route path="/waiter" element={<RequireAuth><Waiter /></RequireAuth>} />
            <Route path="/waiter/OrderDelivered" element={<OrderDelivered />} />
            <Route path="/chef" element={<RequireAuth><Chef /></RequireAuth>} />
            <Route path="/boss" element={<RequireAuth><Administrator/></RequireAuth>} />
            <Route path="/modal" element={<Modal />} />
            <Route path="*" element={<NotFoundPage/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;

