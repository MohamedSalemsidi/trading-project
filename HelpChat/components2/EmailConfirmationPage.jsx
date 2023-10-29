import React, { useState } from "react";
import { Axios } from "axios"; // لإرسال طلب إلى الخادم
import { Link } from "react-router-dom";
import { Button, FormGroup, Input, Label } from "reactstrap";

function EmailConfirmationPage() {
  const [confirmationCode, setConfirmationCode] = useState("");
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const handleConfirmationCodeChange = (event, valuee) => {
    const value = event.target.value;
    // confirmationCode(valuee)
    setConfirmationCode(value);
  };

  const handleConfirmEmail = async () => {
    try {
      const response = await Axios.post("/api/confirmEmail", {
        confirmationCode,
      });

      if (response.data.success) {
        setConfirmationMessage("تم تأكيد عنوان البريد الإلكتروني بنجاح.");
      } else {
        setConfirmationMessage("رمز التأكيد غير صحيح. يرجى المحاولة مرة أخرى.");
      }
    } catch (error) {
      console.error(error);
      setConfirmationMessage(
        "حدث خطأ أثناء التأكيد. الرجاء المحاولة مرة أخرى لاحقًا."
      );
    }
  };

  return (
    <div className="bg-dark">
      {/* <FormGroup className="container">
        <h2>أدخل الرمز المرسل للتحقق من البريد</h2>
        <Label>رمز تأكيد البريد</Label>
        <Input type="number" onChange={handleConfirmEmail}/>
      </FormGroup>
      <Button onSubmit={handleConfirmationCodeChange}>تأكيد </Button> */}
      <ReturnPassword />
    </div>
  );
}

export default EmailConfirmationPage;
