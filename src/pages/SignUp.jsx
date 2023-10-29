import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
import Axios from 'axios';
import Input from "../compnents/Input";

function SignUp() {
  //HOOKS
  const [email, setEmail] = useState("");
  const [valideEmail, setValidEmail] = useState(false);

  const [name, setName] = useState('');
  const [fatherName, setFatherName] = useState("");
  const [familyName, setFamilyName] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");
  const handlePhoneChange = (value, country) => {
    setPhoneNumber(value);
  };
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState("");

  const confirmationPassword = (pass)=> {
    if(pass !== password) {
      console.log('there are not same')
    }
  }

  // VALIDATION EMAIL
  // const validatEmail = (email) => {
  //   const emailRegex = /^[A-ZO-9._%+-]+@[A-ZO-9.-]+\.[A-Z]{2,}$/i;
  //   return emailRegex.test(email);
  // };
  const handleInputChange = (event) => {
    event.preventDefault();
    const newEmail = event.target.value;
    const isValid = validatEmail(newEmail);

    setEmail(newEmail);
    setValidEmail(isValid);
  };

  //PASSWORD FUNCTIONS
  const isPasswordValid = (password) => {
    if (password.length < 8) {
      return false;
    }
    if (!/[A-Z]/.test(password)) {
      return false;
    }
    if (!/[@#]/.test(password)) {
      return false;
    }
    return true;
  };
  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    console.log(newPassword);
    setPassword(newPassword)
    const isValid = isPasswordValid(newPassword);
    
    confirmPassword(isValid)
  };
  // CREATE USER
  const createUser = () => {
    
    Axios.post("http://localhost:5000/api/createuser", {
      firstName,
      fatherName,
      familyName,
      phoneNumber,
      email,
      password,
    }).then((res) => {
      console.log(res.data);
    });

    confirmationPassword(password);
  };

  return (
    <div className="container">
      <h2>الاشتراك</h2>
      <form className="signUp-form" onSubmit={handleInputChange}>
        <Input
          type="text"
          placeholder="الاسم"
          required="required"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="اسم الأب"
          required="required"
          onChange={(e) => setFatherName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="اسم العايلة"
          onChange={(e) => setFamilyName(e.target.value)}
        />
        <div className="country-code">
          {/* <select name="" id="">
            <option>MRU</option>
            <option>EGY</option>
            <option>EMR</option>
          </select> */}
          {/* <Input
            type="Number"
            placeholder="رقم الهاتف"
            onChange={(e) => setPhoneNumber(e.target.value)}
          /> */}
          <div>
            <label>رقم الهاتف:</label>
            <PhoneInput
              inputStyle={{ width: "100%" }}
              country={"us"} // اختيار الدولة الافتراضية
              value={phoneNumber}
              onChange={handlePhoneChange}
            />
          </div>
        </div>
        <Input
          type="email"
          // onChange={() => handleInputChange}
          //   value={email}
          placeholder="البريد الالكتروني"
          required="required"
          onChange={(e) => setEmail(e.target.value)}
        />
        {valideEmail ? (
          <p>البريد الالكتروني صحيح</p>
        ) : (
          <p>البريد الالكتروني غير صحيح</p>
        )}
        <Input
          type="password"
          // value={password}
          placeholder="كلمة المرور"
          required="required"
          // onChange={handlePasswordChange}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="password"
          placeholder="التأكد من كلمة المرور"
          required="required"
          onChange={(e) => e.target.value}
        />
        <button onClick={createUser} type="submit">
          انشاء
        </button>
      </form>
    </div>
  );
}

export default SignUp;
