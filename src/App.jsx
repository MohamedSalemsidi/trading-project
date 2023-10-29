import "./App.css";
import Axios from "axios";
import SignUp from "./pages/SignUp";
import { useEffect, useState } from "react";
import ConfirmationEmail from "./pages/ConfirmationEmail";
import TransactionsPage from "./pages/TransactionsPage";
import Login from "../src/pages/Login";
import Home from "../src/pages/Home";
import SingUpch from "../HelpChat/SingUp-ch";
import { Route, Routes } from "react-router";
import DispositPage from "./pages/DispositPage";
import ReturnPassword from "./pages/ReturnPassword";
import Withdraw from "./pages/WithdrawPage";
import TableControl from "./pages/TableControl";
import ForgotPasswordPage from "./pages/ForgotPassword";
import DashboardPage from "./DashboardPage";
import HomePage from "./pages/HomePage";

function App() {
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   Axios.get("http://localhost:5000/api/users").then((res) => {
  //     setUsers(res.data);
  //   });
  // }, []);

  return (
    <>
      <Routes>
        <Route path="/signup" element={<SingUpch />} />
        <Route path="/login" element={<Login />} />
        <Route path="confirmationEmail" element={<ConfirmationEmail />} />
        <Route path="/" element={<Home />} />
        <Route path="/homePage" element={<HomePage />} />
        <Route path="/disposite" element={<DispositPage />} />
        <Route path="/ReturnPassword" element={<ReturnPassword />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/transaction" element={<TransactionsPage />} />
        <Route path="/tableControl" element={<TableControl />} />
        <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </>
  );
}

export default App;
