import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import { RegisterProvider } from "./contexts/registerContext";
import RequireLogin from "./Components/Auth/RequireLogin";
import RequirePin from "./Components/Auth/RequirePin";

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
import Welcome from "./Components/Home/Welcome";
import Missing from "./pages/Missing";
import EmpDashboard from "./pages/employee/EmpDashboard";
import ContactBank from "./pages/ContactBank";
import { WithDrawProvider } from "./contexts/withdrawContext";
import WithDrawConfirm from "./pages/payment/WithDrawConfirm";
import SummaryStatement from "./pages/SummaryStatement";
import Favorite from "./pages/Favorite";

function App() {

  return (
    <>
      <div className="min-h-screen font-notoTH pt-12">
        <Router>
          <Topbar />
          <TopbarWithBack />
          <NavBar />
          <Routes>

            {/* Public */}
            <Route path="/login" element={<Login />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/register/user" element={<RegisterProvider><RegisterUser /></RegisterProvider>} />
            <Route path="/register/info" element={<RegisterProvider><CreateAccount /></RegisterProvider>} />
            <Route path="/register/account" element={<RegisterProvider><RegisterAccount /></RegisterProvider>} />
            <Route path="/register/confirm" element={<RegisterProvider><ConfirmRegister /></RegisterProvider>} />
            <Route path="/register/pin" element={<RegisterProvider><CreatePin /></RegisterProvider>} />

            {/* Role: User (Permission Level 0) */}
            <Route element={<RequireLogin allowedPermissions={[0,1]} />}>
              <Route path="/" element={<Home />} />
              <Route path="/auth-pin" element={<AuthPin />} />

              {/* Require pin for transaction and personal information */}
              <Route element={<RequirePin />}>
                <Route path="/transfer" element={<PaymentProvider><Tranfer /></PaymentProvider>} />
                <Route path="/payment/:destid" element={<PaymentProvider><PaymentRequire /></PaymentProvider>} />
                <Route path="/payment-confirm" element={<PaymentProvider><PaymentConfirm /></PaymentProvider>} />
                <Route path="/topup" element={<Topup />} />
                <Route path="/bill" element={<Bill />} />
                <Route path="/withdraw" element={<WithDrawProvider><Withdraw /></WithDrawProvider>} />
                <Route path="/withdraw-confirm" element={<WithDrawProvider><WithDrawConfirm /></WithDrawProvider>} />
                <Route path="/favorite" element={<Favorite />} />
                <Route path="/overall" element={<Overall />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/statement" element={<Statement />} />
                <Route path="/summary-statement" element={<SummaryStatement />} />
                <Route path="/contact-bank" element={<ContactBank />} />
              </Route>
            </Route>

            {/* Role: Employee (Permission Level 1) */}
            <Route element={<RequireLogin allowedPermissions={[1]} />}>
              <Route path="/emp/dashboard" element={<EmpDashboard />} />
            </Route>

            {/* catch all */}
            <Route path="*" element={<Missing />} />

          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
