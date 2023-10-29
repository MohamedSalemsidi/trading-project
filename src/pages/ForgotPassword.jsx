import React, { useState } from "react";
import {Link} from 'react-router-dom'; // ...
import axios from "axios"; // لإرسال طلب إلى الخادم

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [resetPasswordSuccess, setResetPasswordSuccess] = useState(false);

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handleResetPassword = async () => {
    try {
      // إرسال البريد الإلكتروني إلى الخادم لإعادة تعيين كلمة المرور
      const response = await axios.post("/api/resetPassword", {
        email,
      });

      if (response.data.success) {
        setResetPasswordSuccess(true);
      }
    } catch (error) {
      console.error(error);
      setResetPasswordSuccess(false);
    }
  };

  return (
    <div>
      <h2>نسيت كلمة المرور</h2>
      {resetPasswordSuccess ? (
        <p>تم إرسال كلمة المرور إلى عنوان البريد الإلكتروني.</p>
      ) : (
        <div>
          <p>الرجاء إدخال عنوان البريد الإلكتروني المسجل به مسبقًا.</p>
          <input
            type="text"
            placeholder="البريد الإلكتروني"
            value={email}
            onChange={handleEmailChange}
          />
          <button onClick={handleResetPassword}>تأكيد</button>
        </div>
      )}
      
      <p>
        ليس لديك حساب؟ <Link to="/signup">إنشئ حساب جديد الآن</Link>
      </p>
    </div>
  );
}

export default ForgotPasswordPage;