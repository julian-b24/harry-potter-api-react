import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import AuthenticationContext from "../context/AuthenticationContext";
import users from "../assets/users-db.json";

export const STATUS = {
  SUCCESS: "success",
  ERROR: "error",
};

function LoginModal({ closeLoginModal }) {
  const { setLoggedIn, setUser } = useContext(AuthenticationContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      users.forEach((user) => {
        if (user.email === email) {
          if (user.password === password) {
            setLoggedIn(true);
            setUser(user);
            setStatus(STATUS.SUCCESS);
            setEmail("");
            setPassword("");
            closeLoginModal();
          } else {
            throw new Error();
          }
        } else {
          throw new Error();
        }
      });
    } catch (error) {
      setErrorMessage("Error (auth/invalid-email-or-password)");
      setStatus(STATUS.ERROR);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        // backgroundColor: "rgba(0,0,0,0.5)",
        backdropFilter: "blur(8px)",
        zIndex: 50,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
        className="p-8 rounded-md bg-white flex flex-col items-center w-96"
      >
        <p className="text-3xl pt-3 pb-10">Login</p>
        <FontAwesomeIcon
          className="absolute top-4 right-4 text-xl cursor-pointer"
          onClick={closeLoginModal}
          icon={faXmark}
        />
        <form className="flex flex-col items-center w-full" action="">
          <input
            className="border border-gray-300 p-1 pl-2.5 mb-4 w-full rounded-lg"
            type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="border border-gray-300 p-1 pl-2.5 w-full rounded-lg"
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex justify-center py-4 w-full pt-8">
            <button
              className="rounded-3xl p-0.5 w-full"
              style={{ backgroundColor: "#504099" }}
              onClick={(e) => {
                handleLogin(e);
              }}
            >
              <p className="text-white py-1 font-semibold">Login</p>
            </button>
          </div>
          <div className="text-center">
            {status === STATUS.SUCCESS ? (
              <p className="text-green-600">Login successful</p>
            ) : (
              <p className="text-red-600">{errorMessage}</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
