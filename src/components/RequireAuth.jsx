import { Navigate } from "react-router-dom";
import AuthenticationContext from "../context/AuthenticationContext";
import { useContext } from "react";

function RequireAuth({ children }) {
  const { loggedIn } = useContext(AuthenticationContext);

  if (!loggedIn) {
    return <Navigate to="/?error" />;
  }

  return children;
}

export default RequireAuth;
