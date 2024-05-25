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
import EmpDashboard from "./pages/role_employee/EmpDashboard";
import ContactBank from "./pages/ContactBank";
import { WithDrawProvider } from "./contexts/withdrawContext";
import WithDrawConfirm from "./pages/payment/WithDrawConfirm";
import SummaryStatement from "./pages/SummaryStatement";
import Favorite from "./pages/Favorite";
import SpvDashboard from "./pages/role_supervisor/SpvDashboard";
import SpvViewTransaction from "./pages/role_supervisor/SpvViewTransaction";
import BmgViewTransaction from "./pages/role_bankmanager/BmgViewTransaction";
import BmgDashboard from "./pages/role_bankmanager/BmgDashboard";
import SpvOtherService from "./pages/role_supervisor/SpvOtherService";
import SpvTopupManage from "./pages/role_supervisor/SpvTopupManage";
import SpvBillManage from "./pages/role_supervisor/SpvBillManage";
import SpvAddTopup from "./pages/role_supervisor/SpvAddTopup";
import SpvAddBill from "./pages/role_supervisor/SpvAddBill";
import EmpManageUser from "./pages/role_employee/EmpManageUser";
import SpvRegisEmp from "./pages/role_supervisor/SpvRegisEmp";
import SpvTopUp from "./pages/role_supervisor/SpvTopUp";

function App() {

  return (
    <>
      <div className="min-h-screen font-notoTH pt-12 overflow-hidden">
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
            <Route element={<RequireLogin allowedPermissions={[0, 1]} />}>
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
              <Route path="/emp/manage/user" element={<EmpManageUser />} />
            </Route>

            {/* Role: Employee (Permission Level 2) */}
            <Route element={<RequireLogin allowedPermissions={[1]} />}>
              <Route path="/spv/dashboard" element={<SpvDashboard />} />
              <Route path="/spv/view-transaction" element={<SpvViewTransaction />} />

              <Route path="/spv/other-service" element={<SpvOtherService />} />
              <Route path="/spv/other-service/add/topup" element={<SpvAddTopup />} />
              <Route path="/spv/other-service/add/bill" element={<SpvAddBill />} />
              <Route path="/spv/other-service/edit/topup/:id" element={<SpvTopupManage />} />
              <Route path="/spv/other-service/edit/bill/:id" element={<SpvBillManage />} />
            </Route>

            {/* Role: Employee (Permission Level 3) */}
            <Route element={<RequireLogin allowedPermissions={[1]} />}>
              <Route path="/bmg/dashboard" element={<BmgDashboard />} />
              <Route path="/bmg/view-transaction" element={<BmgViewTransaction />} />
              <Route path="/spv/register-form" element={<SpvRegisEmp />} />
              <Route path="/spv/topup" element={<SpvTopUp />} />
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
