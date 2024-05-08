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
import Topup from "./pages/Topup";
import AuthPin from "./pages/AuthPin";
import Withdraw from "./pages/Withdraw";
import Tranfer from "./pages/Tranfer";
import Profile from "./pages/Profile";
import TopbarWithBack from "./Components/Global/TopBarWithBack";
import Bill from "./pages/Bill";
import RegisterAccount from "./pages/register/RegisterAccount";
import CreateAccount from "./pages/register/CreateAccount";
import ConfirmRegister from "./pages/register/ConfirmRegister";
import Statement from "./pages/Statement";
import PaymentRequire from "./pages/payment/PaymentRequire";
import { PaymentProvider } from "./contexts/paymentContext";
import PaymentConfirm from "./pages/payment/PaymentConfirm";

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

            <Route path="/transfer" element={isAuthPinSuccess ? <Tranfer /> : <AuthPin/>} />
            <Route path="/topup" element={isAuthPinSuccess ? <Topup /> : <AuthPin/>} />
            <Route path="/bill" element={isAuthPinSuccess ? <Bill /> : <AuthPin/>} />
            <Route path="/withdraw" element={isAuthPinSuccess ? <Withdraw /> : <AuthPin/>} />
            
            <Route path="/overall" element={isAuthPinSuccess ? <Overall /> : <AuthPin/>} />
            <Route path="/profile" element={isAuthPinSuccess ? <Profile />  : <AuthPin/>} />
            <Route path="/statement" element={isAuthPinSuccess ?<Statement /> : <AuthPin/>} />

            <Route path="/payment/:destid" element={<PaymentProvider><PaymentRequire /></PaymentProvider>} />
            <Route path="/payment-confirm" element={<PaymentProvider><PaymentConfirm /></PaymentProvider>} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
