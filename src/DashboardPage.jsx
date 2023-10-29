import React, { useState, useEffect } from "react";
import axios from "axios";

function DashboardPage() {
  const [capital, setCapital] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [depositAmount, setDepositAmount] = useState(0);
  const [withdrawAmount, setWithdrawAmount] = useState(0);

  useEffect(() => {
    // استعلام عن رأس المال من الخادم عند تحميل الصفحة
    axios
      .get("/api/getCapital")
      .then((response) => {
        setCapital(response.data.capital);
      })
      .catch((error) => {
        console.error(error);
      });

    // استعلام عن سجل المعاملات من الخادم عند تحميل الصفحة
    axios
      .get("/api/getTransactions")
      .then((response) => {
        setTransactions(response.data.transactions);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDeposit = () => {
    // إجراء إيداع وتحديث رصيد المستخدم وسجل المعاملات على الخادم
    axios
      .post("/api/deposit", { amount: depositAmount })
      .then((response) => {
        setCapital(response.data.capital);
        setTransactions(response.data.transactions);
        setDepositAmount(0);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleWithdraw = () => {
    // إجراء سحب وتحديث رصيد المستخدم وسجل المعاملات على الخادم
    axios
      .post("/api/withdraw", { amount: withdrawAmount })
      .then((response) => {
        setCapital(response.data.capital);
        setTransactions(response.data.transactions);
        setWithdrawAmount(0);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>رأس المال: ${capital}</h2>
      <button onClick={handleDeposit}>إيداع</button>
      <input
        type="number"
        value={depositAmount}
        onChange={(e) => setDepositAmount(e.target.value)}
      />
      <button onClick={handleWithdraw}>سحب</button>
      <input
        type="number"
        value={withdrawAmount}
        onChange={(e) => setWithdrawAmount(e.target.value)}
      />
      <h2>سجل المعاملات</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.type}: ${transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DashboardPage;