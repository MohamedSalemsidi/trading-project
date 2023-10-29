import React from "react";
import {Axios} from 'axios'
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { Label, Input, Button, FormGroup, FormFeedback } from "reactstrap";
// import "react-phone-input-2/lib/style.css";
// import Input from "../src//compnents/Input";
import EmailInput from "./components2/EmailInput";
import PasswordInput from "./components2/PasswordInput";
import ConfirmPasswordInput from "./components2/ConfirmPasswordInput";
import * as Yup from "yup";
// import ConfirmationEmail from "../src/pages/ConfirmationEmail";

export default function SingUpch() {
  const [firstName, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [familyName, setFamilyName] = useState("");

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };
  const handleFatherNameChange = (event) => {
    const value = event.target.value;
    setFatherName(value);
  };
  const handleFamilyNameChange = (event) => {
    const value = event.target.value;
    setFamilyName(value);
  };

  const [phoneNumber, setPhoneNumber] = useState("");
  const handlePhoneChange = (value, country) => {
    setPhoneNumber(value);
  };
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };
  const handleFormSubmit = async (values) => {
    if (isPasswordMatch && firstName && fatherName && email) {
      const userData = {
        firstName: firstName,
        fatherName: fatherName,
        email: email,
        password: password,
      };
    }
      await Axios.post("/api/register", {firstName,fatherName,familyName,phoneNumber, email, password });
      alert('Admin created')
    console.log(values);
  };

  return (
    <div>
      <div className="container">
        <h2
        style={{
          textAlign: "center",
          fontSize: "2rem",
          marginTop: "25px",
          fontWeight: "900",
        }}
        >
          الاشتراك
        </h2>

        <Formik
          initialValues={{
            firstName: "",
            fatherName: "",
            familyName: "",
            phoneNumber: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={handleFormSubmit}
          validationSchema={Yup.object().shape({
            firstName: Yup.string().required("حقل الاسم مطلوب"),
            fatherName: Yup.string().required("حقل اسم الأب مطلوب"),
            email: Yup.string().email("اكتب الايميل بطريقة صحيحة").required(),
            password: Yup.string().min(8).required(),
            confirmPassword: Yup.string().required(),
          })}
        >
          {({
            handleChange,
            handleSubmit,
            isValid,
            isSubmitting,
            handleBlur,
            errors,
            touched,
          }) => (
            <div>
              <div>
                <FormGroup>
                  <Label>الاسم</Label>
                  <Input
                    invalid={errors.firstName && touched.firstName}
                    name="firstName"
                    type="text"
                    placeholder="تضع اسمك الأول هنا "
                    required="required"
                    // value={userData.fatherName}
                    // onChange={handleNameChange}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.firstName && touched.firstName ? (
                    <FormFeedback>{errors.firstName}</FormFeedback>
                  ) : null}
                </FormGroup>
                <FormGroup>
                  <Label>اسم الأب</Label>
                  <Input
                    invalid={errors.fatherName && touched.fatherName}
                    name="fatherName"
                    type="text"
                    placeholder="هنا تضع اسم الأب "
                    required="required"
                    // value={userData.fatherName}
                    //onChange={handleFatherNameChange}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.fatherName && touched.fatherName ? (
                    <FormFeedback>{errors.fatherName}</FormFeedback>
                  ) : null}
                </FormGroup>

                <FormGroup>
                  <Label>اسم العايٍلة</Label>
                  <Input
                    name="familyName"
                    type="text"
                    placeholder="هنا تضع الاسم العايلي"
                    // value={userData.familyName}
                    // onChange={handleFamilyNameChange}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </FormGroup>
              </div>
              <FormGroup>
                <div className="country-code">
                  <Label>رقم الهاتف</Label>
                  <PhoneInput
                    id="phoneNumber"
                    name="phoneNumber"
                    inputStyle={{ width: "50%", paddingRight: "50px" }}
                    country={"mr"}
                    // value={phoneNumber}
                    //oncChange={handlePhoneChange}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
              </FormGroup>
              <FormGroup>
                {/* <EmailInput //oncChange={handle}
                  // value={email}
                  
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errors={errors}
                  touched={touched}
                /> */}
                <Input
                  placeholder="somone@gmail.com"
                  name="email"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  invalid={errors.email && touched.email}
                />
                {errors.email && touched.email ? (
                  <FormFeedback>{errors.email}</FormFeedback>
                ) : null}
              </FormGroup>
              <FormGroup>
                <PasswordInput
                  name="password"
                  onChange={handleChange}
                  value={password}
                  onBlur={handleBlur}
                  invalid={errors.password && touched.password}
                  errors={errors}
                  touched={touched}
                />
              </FormGroup>
              <FormGroup>
                {/* <ConfirmPasswordInput
                  name="confirmPassword"
                  // password={password}
              
                  // onChange={handleChange}
                  password={password}
                  onBlur={handleBlur}
                  invalid={errors.confirmPassword && touched.confirmPassword}
                />
                {/* {errors.confirmPassword && touched.confirmPassword ? (
                  <FormFeedback>{errors.confirmPassword}</FormFeedback>
                ) : null} */}
                
              </FormGroup>
              <Button
                className="mb-5"
                type="submit"
                color="success"
                block
                onClick={handleSubmit}
                disabled={!isValid && isSubmitting}
              >
                {/* <Link to="/confirmationEmail" className="text-light"> */}
                  انشاء
                {/* </Link> */}
              </Button>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
}
