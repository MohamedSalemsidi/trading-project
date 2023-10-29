import React, { useState } from "react";
import axios, { Axios } from "axios";
// import Input from "../compnents/Input";
import { Button, FormGroup, Input } from "reactstrap";

export default function Disposite() {
  const [selectMethod, setSelectMethod] = useState("");
  const [amount, setAmount] = useState("");
  const [transaction, setTransaction] = useState("");

  const handleMethodSelect = (method) => {
    setSelectMethod(method);
  };
  const handleAmountChange = (event) => {
    const value = event.target.value.replace(/\D/g, "");
    setAmount(value);
  };
  const handleDisposite = (event) => {
    if (selectMethod && amount > 0) {
      axios
        .post("localhost:5000/api/deposit", { method: selectMethod, amount })
        .then((response) => {
          setTransaction("جاري التنفيذ");
        })
        .catch((error) => {
          console.error(error);
          setTransaction("حدث خطأ");
        });
    }
  };
  return (
    <div className="container">
      <h2 className="m-4">صفحة الايداع</h2>
      <div className="row align-items-center">
        <button
          onClick={() => handleMethodSelect("PayPal")}
          className="btn btn-outline-info col-3 m-1"
        >
          PayPal
        </button>
        <button
          onClick={() => handleMethodSelect("Payeer")}
          className="btn btn-outline-info col-3 m-1"
        >
          Payeer
        </button>
        <button
          onClick={() => handleMethodSelect("PerfectMoney")}
          className="btn btn-outline-info col-3 m-1"
        >
          PerfectMoney
        </button>
      </div>
      {selectMethod && (
        <div className="row">
          <p className="mt-2">الوسيلة المحددة :{selectMethod}</p>
          <FormGroup className="container w-70">
            <Input
              className="form-control"
              type="Number"
              placeholder="مبلغ الايداع"
              // value="amount"
              onChange={handleAmountChange}
            />
          </FormGroup>
          <Button onClick={handleDisposite}>إيداع</Button>
          <p>{transaction}</p>
        </div>
      )}
    </div>
  );
}
