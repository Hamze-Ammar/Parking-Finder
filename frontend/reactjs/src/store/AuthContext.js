import { createContext, useState } from "react";
// import {checkForPendingRequest}  from '../pages/login/loginController';
import { checkForPendingRequest } from "../pages/login/loginController";

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  hasRequest: false,
  setRequestStatus: (boolean) => {},
  authenticate: (token) => {},
  logout: () => {},
});

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState();
  const [hasPendingReq, setHasPendingRequest] = useState();
  console.log(hasPendingReq);

  async function authenticate(token) {
    setAuthToken(token);
    // Check if the user has pending request
    setHasPendingRequest(await checkForPendingRequest(token));

    localStorage.setItem("token", token);
  }

  function logout() {
    setAuthToken(null);
    localStorage.removeItem("token");
  }

  function setRequestStatus(boolean) {
    setHasPendingRequest(boolean);
  }

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    hasRequest: hasPendingReq,
    setRequestStatus: setRequestStatus,
    logout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
