import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { Context } from "./context/Context.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context>
    <ToastContainer />

    <App />
  </Context>
);

reportWebVitals();
