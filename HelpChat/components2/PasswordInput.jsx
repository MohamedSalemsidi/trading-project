import React, { useState } from "react";
import { Label,FormGroup,FormFeedback, Input } from "reactstrap";
import ConfirmPasswordInput from "./ConfirmPasswordInput";

function PasswordInput({name, onChange, onBlur, invalid,errors,touched}) {
  const [password, setPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(true);

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);

    // التحقق من شروط كلمة المرور
    const isLengthValid = value.length > 8;
    const hasUppercase = /[A-Z]/.test(value);
    const hasSymbol = /[@#]/.test(value);

    // إعداد حالة صحة كلمة المرور
    setIsValidPassword(isLengthValid && hasUppercase && hasSymbol);
  };

  return (
    <div>
      <FormGroup>
        <Label>كلمة المرور</Label>
        <Input
          placeholder="ex: Gw2walooose"
          name={name}
          type="text"
          onChange={handlePasswordChange}
          value={password}
          className={!isValidPassword ? "invalid" : ""}
          onBlur={onBlur}
          invalid={invalid}
        />
        {/* {errors.password && touched.password ? (
          <FormFeedback>{errors.password}</FormFeedback>
        ) : null} */}

        {!isValidPassword && (
          <FormFeedback className="error-text">
            كلمة المرور غير صالحة. يرجى استخدام كلمة مرور تتضمن أكثر من 8 أحرف،
            حرف كبير واحد على الأقل، وعلامة "@" أو "#".
          </FormFeedback>
        )}
      </FormGroup>
      <FormGroup>
        <ConfirmPasswordInput password={password}/>
      </FormGroup>
    </div>
  );
}

export default PasswordInput;