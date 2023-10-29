import React, { useState } from "react";
import ConfirmationEmail from "./ConfirmationEmail";
// import Input from '../compnents/Input'
import { Input, FormGroup, Button, FormFeedback } from "reactstrap";
import { Formik } from "formik";
import * as Yup from "yup";

function ReturnPassword() {
  // const [email, setEmail] = useState("");

  // const handleChange = (event) => {
  //   const value = event.target.value;
  //   setEmail(value);
  // };
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <div
      className="container"
      style={{ marginTop: "50px", textAlign: "center" }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "25px",
          fontWeight: "bold",
        }}
      >
        استعادة كلمة المرور
      </h2>
      <Formik
        initialValues={{ email: "" }}
        onSubmit={onSubmit}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('اكتب الايميل بطريقة صحيحة').required('حقل الايميل مطلوب'),
        })}
      >
        {({
          handleChange,
          handleSubmit,
          handleBlur,
          isValid,
          isSubmitting,
          errors,
          touched
        }) => (
          <div>
            <FormGroup>
              <Input
                invalid = {errors.email && touched.email}
                name="email"
                type="email"
                placeholder="البريد الالكتروني المسجل به مسبقا"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <FormFeedback>{errors.email}</FormFeedback>
              ) : null}
            </FormGroup>
            <Button
              disabled={!isValid || isSubmitting}
              onClick={handleSubmit}
              block
              style={{ marginTop: "25px" }}
            >
              تأكيد
            </Button>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default ReturnPassword;
