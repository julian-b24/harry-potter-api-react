import { Navigate } from "react-router-dom";
import AuthenticationContext from "../context/AuthenticationContext";
import { useContext } from "react";

const base = "/harry-potter-api-react";

function RequireAuth({ children }) {
  const { loggedIn } = useContext(AuthenticationContext);

  if (!loggedIn) {
    return <Navigate to={base + "/?error"} />;
  }

  return children;
}

export default RequireAuth;
