// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./viewPages/Login";
import Roles from "./viewPages/Roles";
import NotFoundPage from "./viewPages/NotFoundPage";
import Navigation from "./components/Navigation";
import Waiter from "./viewPages/Waiter";
import Chef from "./viewPages/Chef";
import Administrator from "./viewPages/Administrator";

const App = () => {
  return (
    <div>
      <BrowserRouter>

        <Navigation/>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/orders" element={<Waiter />} />
          <Route path="/cook" element={<Chef />} />
          <Route path="/management" element={<Administrator />} />
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;

