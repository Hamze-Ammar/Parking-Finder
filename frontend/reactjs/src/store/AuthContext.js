import { createContext, useState, useEffect } from "react";
import { checkForPendingRequest } from "../pages/login/loginController";

export const AuthContext = createContext({
  token: "",
  userType: "",
  isAuthenticated: false,
  hasRequest: false,
  setRequestStatus: (boolean) => {},
  authenticate: (token) => {},
  logout: () => {},
});

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState();
  const [authType, setAuthType] = useState();
  const [hasPendingRequest, setHasPendingRequest] = useState();

  async function authenticate(token, userType) {
    setAuthToken(token);
    if (userType) {
      setAuthType(userType);
    }
    // Check if the user has pending request
    const res = await checkForPendingRequest(token);
    setHasPendingRequest(res);
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
    hasRequest: hasPendingRequest,
    setRequestStatus: setRequestStatus,
    logout: logout,
    userType: authType,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
