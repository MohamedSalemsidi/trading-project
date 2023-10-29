import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import App from "./App.jsx";
import "./index.css";
// import  {
//   createBrowserRouter,
//   RouterProvider,
//   Route
// } from 'react-router-dom'
import { BrowserRouter } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <div>Hello world</div>
//   }
// ])
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
