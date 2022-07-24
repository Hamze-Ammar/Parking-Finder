import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./App.css";
import AuthContextProvider from "./store/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);
