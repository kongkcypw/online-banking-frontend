import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './App.css'

import { UserContext } from "./contexts/userContext";
import { useContext } from "react";

import Home from './pages/Home';
import Login from "./pages/Login";
import Register from "./pages/Register";
import NavBar from "./Components/Global/NavBar";
import Overall from "./pages/Overall";
import Topbar from "./Components/Global/Topbar";
import CreatePin from "./pages/CreatePin";
import TopUp from "./pages/TopUp";
import AuthPin from "./pages/AuthPin";

function App() {

  const { isAuthPinSuccess } = useContext(UserContext);

  return (
    <>
      <div className="min-h-screen font-notoTH ">
        <Router>
          <Topbar/>
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/register/pin" element={<CreatePin />} />
            <Route path="/overall" element={<Overall />} />
            <Route path="/topup" element={isAuthPinSuccess ? <TopUp /> : <AuthPin/>} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App