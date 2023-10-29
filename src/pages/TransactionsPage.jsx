import React, { useState, useEffect } from "react";
import axios from "axios";

function TransactionsPage() {
  const [transactions, setTransactions] = useState([]);

  // useEffect(() => {
  //   // استدعاء البيانات من الخادم عند تحميل الصفحة
  //   axios
  //     .get("/api/transactions")
  //     .then((response) => {
  //       setTransactions(response.data.transactions);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);
  useEffect(() => {
    fetch("http://localhost:5000/api/transactions")
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data);
      })
  }, [transactions]);
  console.log(transactions);
  return (
    <div
      className=" text-light bg-dark text-center"
      style={{ padding: "20px" }}
    >
      <h2>صفحة سجل المعاملات</h2>
      <table className="container table" style={{ marginTop: "30px" }}>
        <thead>
          <tr>
            <th>التفاصيل</th>
            <th>القيمة</th>
            <th>تاريخ</th>
            <th>حالة الطلب</th>
            <th>إلغاء السحب</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.type}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.date}</td>
                <td>{transaction.status}</td>
                {transaction.type === "سحب" &&
                  transaction.status === "جاري التنفيذ" && (
                    <td>
                      <button>إلغاء السحب</button>
                    </td>
                  )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionsPage;
