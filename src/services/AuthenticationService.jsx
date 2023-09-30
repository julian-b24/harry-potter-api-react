import { useContext, useEffect, useState } from "react";
import AuthenticationContext from "../context/AuthenticationContext";

export default function AuthenticationService() {
  const { loggedIn } = useContext(AuthenticationContext);

  const [user, setUser] = useState(null);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      // TODO: Login logic
      closeLoginModal();
    } catch (error) {
      // console.error(error);
      setErrorMessage("Error (auth/invalid-email-or-password)");
      setStatus(STATUS.ERROR);
    }
  };

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      //   await createUserWithEmailAndPassword(firebaseAuth, email, password).then(
      //     (res) => {
      //       addDoc(usersCollectionRef, {
      //         username: username,
      //         email: res.user.email,
      //         uid: res.user.uid,
      //       }).then(() => {
      //         setUser({
      //           username: username,
      //           email: res.user.email,
      //           uid: res.user.uid,
      //         });
      //       });
      //       setStatus(STATUS.SUCCESS);
      //       setEmail("");
      //       setPassword("");
      //       setUsername("");
      //     }
      //   );
      closeLoginModal();
    } catch (error) {
      // console.error(error);
      let err_message = error.message;
      setErrorMessage(err_message.slice(10));
      setStatus(STATUS.ERROR);
    }
  };

  return {
    loggedIn,
  };
}
