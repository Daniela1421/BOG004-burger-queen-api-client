import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./viewPages/Login";
import NotFoundPage from "./viewPages/NotFoundPage";
import Waiter from "./viewPages/Waiter/Waiter";
import Chef from "./viewPages/Chef";
import Administrator from "./viewPages/Administrator";
import RequireAuth from "./components/RequireAuth";
import OrderDelivered  from "./viewPages/Waiter/OrderDelivered";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Login />} />
          
            <Route path="/waiter" element={<RequireAuth><Waiter /></RequireAuth>} />
            <Route path="/waiter/OrderDelivered" element={<OrderDelivered />} />
            <Route path="/chef" element={<RequireAuth><Chef /></RequireAuth>} />
            <Route path="/boss" element={<RequireAuth><Administrator/></RequireAuth>} />
            <Route path="*" element={<NotFoundPage/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
