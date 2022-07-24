import { useContext, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import Login from "./pages/login/Login";
import SignUp from "./pages/register/SignUp";
import { AuthContext } from "./store/AuthContext";
import RegisterParking from "./pages/registerParking/RegisterParking";

function App() {
  const AuthCtx = useContext(AuthContext);

  useEffect(() => {
    function fetchToken() {
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        AuthCtx.authenticate(storedToken);
      }
    }
    fetchToken();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <LandingPage />
              </>
            }
          ></Route>
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          ></Route>
          <Route
            path="/signUp"
            element={
              <>
                <SignUp />
              </>
            }
          ></Route>
          <Route
            path="/registerParking"
            element={
              <>
                <RegisterParking />
              </>
            }
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
