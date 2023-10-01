import React, { useContext } from "react";
import AuthenticationContext from "../context/AuthenticationContext";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const base = "/harry-potter-api-react/"

function Header({ openLoginModal }) {
  const navigate = useNavigate();

  const { loggedIn, setLoggedIn, user, setUser } = useContext(
    AuthenticationContext
  );

  const handleLogout = () => {
    setLoggedIn(false);
    setUser(null);
  };

  return (
    <div
      className="z-50 sticky top-0 w-full  h-16 flex items-center justify-between p-4 drop-shadow-md"
      style={{ backgroundColor: "#6F61C0" }}
    >
      <p
        className="text-white harryp text-4xl cursor-pointer"
        onClick={() => navigate(base)}
      >
        Potter Wiki
      </p>
      {!loggedIn ? (
        <button
          className="rounded-md py-1 px-2 font-semibold text-white"
          style={{ backgroundColor: "#504099" }}
          onClick={openLoginModal}
        >
          Login
        </button>
      ) : (
        <div className="flex items-center">
          {user && (
            <>
              <FontAwesomeIcon
                className="text-white pr-2 text-xl"
                icon={faCircleUser}
              />
              <p className="pr-5 text-white font-semibold">{user.username}</p>
            </>
          )}
          <button
            className="rounded-md py-1 px-2 font-semibold text-white"
            style={{ backgroundColor: "#504099" }}
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
