import React, {useState} from "react";
import axios from "axios";
// import Input from "../compnents/Input";
import {FormGroup, Input, Button} from 'reactstrap'

export default function Withdraw() {
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

  const handleWithdraw = () => {
    if (selectMethod && amount > 0) {
      axios
        .post(
          "/api/withdraw",
          { method: selectMethod, amount }).then((response) => {
            if (response.data.success) {
              setTransaction("جاري التنفيذ");
            } else {
              setTransaction("فشل في التنفيذ");
            }
          })
        .catch((error) => {
          console.error(error);
          setTransaction("فشل في التنفيذ");
        });
    }
  };
  return (
    <div className="container">
      <h2 className="m-4"> السحب</h2>
      <div>
          <Button onClick={() => handleMethodSelect("PayPal")} className="m-1">PayPal</Button>
          <Button onClick={() => handleMethodSelect("Payeer")} className="m-1">Payeer</Button>
        <Button onClick={() => handleMethodSelect("PerfectMoney")}className="m-1">
          PerfectMoney
        </Button>
        {selectMethod && (
          <div className="row m-2">
            <p className="mt-2">الوسيلة المحددة: {selectMethod}</p>
            <FormGroup>
              <Input
                type="text"
                placeholder="مبلغ السحب"
                // value={amount}
                onChange={handleAmountChange}
              />
            </FormGroup>
              <Button onClick={handleWithdraw}>سحب</Button>
              <p>{transaction}</p>
          </div>
        )}
      </div>
    </div>
  );
}
