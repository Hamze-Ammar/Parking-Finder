import { createContext, useState, useContext } from "react";
import { getPendingRequests } from "../pages/admin/pendingRequests/pendingRequestsController";
import { AuthContext } from "./AuthContext";

export const AdminPanelContext = createContext({
  pendingRequests: "",
  updatePendingRequests: () => {},
  fetchPendingRequests: () => {},
});

function AdminPanelContextProvider({ children }) {
  const AuthCtx = useContext(AuthContext);
  const [pendingRequests, setPendingRequests] = useState();

  // Update Pending Requests total that appears in red in Dashboard
  // Once the admin delete or approve a request decrement by one
  function updatePendingRequests() {
    setPendingRequests(pendingRequests - 1);
  }

  async function fetchPendingRequests() {
    let requests = await getPendingRequests(AuthCtx.token);
    if (requests?.length) {
      setPendingRequests(requests.length);
    }
  }

  const value = {
    pendingRequests: pendingRequests,
    updatePendingRequests: updatePendingRequests,
    fetchPendingRequests: fetchPendingRequests,
  };

  return (
    <AdminPanelContext.Provider value={value}>
      {children}
    </AdminPanelContext.Provider>
  );
}

export default AdminPanelContextProvider;
