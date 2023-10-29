import React from "react";
import Capital from "./Capital";
import DispositPage from "./DispositPage";
import { Link } from "react-router-dom";
import TransactionsPage from "./TransactionsPage";

function Home() {
  return (
    <div className="container">
      <Capital />
      <Link
        to="/disposite"
        className="btn btn-success m-5"
      >
        صفحة الايداع
      </Link>
      <Link
        to="/withdraw"
        className="btn btn-info  m-5 text-light"
      >
        صفحة السحب{" "}
      </Link>
      <TransactionsPage />
    </div>
  );
}

export default Home;
