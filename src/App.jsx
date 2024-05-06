import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import { UserContext } from "./contexts/userContext";
import { RegisterProvider } from "./contexts/registerContext";
import { useContext } from "react";

import Home from "./pages/Home";
import Login from "./pages/Login";
import RegisterUser from "./pages/register/RegisterUser";

import NavBar from "./Components/Global/NavBar";
import Overall from "./pages/Overall";
import Topbar from "./Components/Global/Topbar";
import CreatePin from "./pages/register/CreatePin";
import TopUp from "./pages/TopUp";
import AuthPin from "./pages/AuthPin";
import Withdraw from "./pages/Withdraw";
import Tranfer from "./pages/Tranfer";
import Profile from "./pages/Profile";
import TopbarWithBack from "./Components/Global/TopBarWithBack";
import Bill from "./pages/Bill";
import RegisterAccount from "./pages/register/RegisterAccount";
import CreateAccount from "./pages/register/CreateAccount";
import ConfirmRegister from "./pages/register/ConfirmRegister";

function App() {
  
  const { isAuthPinSuccess } = useContext(UserContext);

  return (
    <>
      <div className="min-h-screen font-notoTH pt-12">
        <Router>
          <Topbar />
          <TopbarWithBack />
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />

            <Route path="/register/user" element={<RegisterProvider><RegisterUser /></RegisterProvider>} />
            <Route path="/register/info" element={<RegisterProvider><CreateAccount /></RegisterProvider>} />
            <Route path="/register/account" element={<RegisterProvider><RegisterAccount /></RegisterProvider>} />
            <Route path="/register/confirm" element={<RegisterProvider><ConfirmRegister /></RegisterProvider>} />
            <Route path="/register/pin" element={<RegisterProvider><CreatePin /></RegisterProvider>} />

            <Route path="/overall" element={<Overall />} />

            {/* <Route path="/topup" element={isAuthPinSuccess ? <TopUp /> : <AuthPin/>} /> */}
            <Route path="/topup" element={<TopUp />} />
            <Route path="/bill" element={<Bill />} />
            <Route path="/transfer" element={<Tranfer />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
