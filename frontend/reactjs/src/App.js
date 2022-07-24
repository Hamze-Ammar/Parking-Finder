import { useContext, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import Login from "./pages/login/Login";
import { AuthContext } from "./store/AuthContext";

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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
