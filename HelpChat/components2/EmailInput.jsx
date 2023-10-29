import React, { useState } from "react";
import {Label, Input, FormGroup, FormFeedback} from 'reactstrap'

function EmailInput({ name, onBlur, invalid, errors, touched , value}) {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    const isValid = validateEmail(value);
    setIsValidEmail(isValid);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };

  return (
    <div>
      <FormGroup>
        <Label>البريد الإلكتروني</Label>
        <Input
          name={name}
          placeholder="someone@gmail.com"
          type="text"
          value={value}
          onChange={handleEmailChange}
          //className={!isValidEmail ? "invalid" : ""}
          onBlur={onBlur}
          // invalid={invalid}
          invalid={errors.email && touched.email}
        />
        {errors.email && touched.email ? (
          <FormFeedback>{errors.email}</FormFeedback>
        ) : null}
      </FormGroup>
      {/* {!isValidEmail && (
        <FormFeedback className="error-text">
          البريد الإلكتروني غير صحيح. يرجى إدخال بريد إلكتروني صحيح.
        </FormFeedback>
      )} */}
    </div>
  );
}

export default EmailInput;
