import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './App.css'

import Home from './pages/Home';
import Login from "./pages/Login";
import Register from "./pages/Register";
import NavBar from "./Components/Global/NavBar";
import Overall from "./pages/Overall";
import Topbar from "./Components/Global/Topbar";

function App() {

  return (
    <>
      <div className="">
        <Router>
          <Topbar/>
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/overall" element={<Overall />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
