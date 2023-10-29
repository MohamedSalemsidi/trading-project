import React, { useState } from "react";
import { Label, FormGroup, FormFeedback, Input } from "reactstrap";
function ConfirmPasswordInput({ password, name, onChange,onBlur, invalid }) {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isMatch, setIsMatch] = useState(true);

  const handleConfirmPasswordChange = (event) => {
    const value = event.target.value;
    setConfirmPassword(value);
    setIsMatch(value === password);
  };

  return (
    <div>
      <FormGroup>
        <Label>تأكيد كلمة المرور</Label>
        <Input
          name={name}
          placeholder="تأكد من ادخال نفس الكلمة السابقة"
          type="text"
          value={confirmPassword}
           onChange={handleConfirmPasswordChange}
          // onChange={onConfirmPasswordChange}
          className={!isMatch ? "invalid" : ""}
          // className={!password ? 'invalid': ''}
          onBlur={onBlur}
          invalid={invalid}
        />
      </FormGroup>
      {!isMatch && (
        <p className="error-text">
          كلمة المرور غير متطابقة مع كلمة المرور الأولى.
        </p>
      )}
    </div>
  );
}

export default ConfirmPasswordInput;
