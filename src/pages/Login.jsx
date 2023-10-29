import React, { useState } from "react";
import { Axios } from "axios";
import { useCookies } from "react-cookie";
// import Input from "../compnents/Input";
import { FormGroup, Button, Input, FormText, Label, FormFeedback } from "reactstrap";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from 'yup';

function Login() {
  // REJUSTER
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const handleEmail = (e) => {
  //   const value = e.target.value;
  //   setEmail(value);
  // };
  // const handlePasswprd = (e) => {
  //   const value = e.target.value;
  //   setPassword(value);
  // };

  // const onSumit = async () => {
  //   await Axios.post("/http://localhost:5000/register", { email, password });
  //   alert('Admin created')
  // };

  // LOGIN
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [_, setCookies] = useCookies(["access_token"]);

  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
  };
  const handlePasswprd = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const onSumit = async (values) => {
    const response = await Axios.post("/http://localhost:5000/login", {
      email,
      password,
    });
    setCookies("access_token", response.data.token);
    window.localStorage.setItem("userID", response.data.adminID);
    console.log(response);
    console.log(values);
  };

  return (
    <div className="container">
      <div className="login">
        <h2
          style={{ textAlign: "center", marginTop: "20px", fontSize: "2rem" }}
          className="text-dark"
        >
          تسجيل الدخول
        </h2>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={onSumit}
          validationSchema={Yup.object().shape({
            email: Yup.string().email().required(),
            password: Yup.string().min(8).required(),
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
              <FormGroup>
                <Label>الايميل</Label>
                <Input
                  invalid={errors.email && touched.email}
                  name="email"
                  type="text"
                  placeholder="someone@gmail.com"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <FormFeedback>{errors.email}</FormFeedback>
                ) : null}
              </FormGroup>

              <FormGroup>
                <Label> كلمة السر</Label>
                <Input
                  invalid={errors.password && touched.password}
                  name="password"
                  type="password"
                  placeholder="ex: GW4wEaafe52$"
                  //onChange={handlePasswprd}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password ? (
                  <FormFeedback>{errors.password}</FormFeedback>
                ) : null}
              </FormGroup>
              <Button
                //onClick={onSumit}
                color="secondary"
                block
                onClick={handleSubmit}
                disabled={!isValid || isSubmitting}
              >
                <Link
                  to={"/"}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  تسجيل الدخول
                </Link>
              </Button>
            </div>
          )}
        </Formik>

        <div
          style={{
            marginTop: "20px",
            textAlign: "center",
            // display: "flex",
            // justifyContent: "space-evenly",
          }}
          className="row justify-content-end"
        >
          <Link
            to="/ReturnPassword"
            style={{ textDecoration: "none" }}
            className="col-12 col-sm-6 col-md-4"
          >
            نسيت كلمة المرور
          </Link>
          <p className="col-12 col-sm-6 col-md-4">ليس لدي حساب</p>
          <Link
            to="/signup"
            style={{ textDecoration: "none" }}
            className="col-12 col-sm-6 col-md-4"
          >
            افتح حساب جديد
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
