import { useContext, useEffect, useState } from "react";
import AuthenticationContext from "../context/AuthenticationContext";

export default function AuthenticationService() {
  
  const { loggedIn } = useContext(AuthenticationContext);

  const [user, setUser] = useState(null);

  return {
    loggedIn,
  };
}
