import React, { useState } from "react";
import Header from "../components/Header";
import LoginSignupModal from "../components/LoginSignupModal";

function HomeView() {
  const [loginModal, setLoginModal] = useState(false);

  const openLoginModal = () => {
    setLoginModal(true);
  };

  const closeLoginModal = () => {
    setLoginModal(false);
  };

  return (
    <div
      className="min-h-screen w-screen"
      style={{ backgroundColor: "#35858B" }}
    >
      <Header openLoginModal={openLoginModal} />
      {loginModal && <LoginSignupModal closeLoginModal={closeLoginModal} />}
      <p
        className="py-5 text-center"
        style={{ fontSize: 60, color: "#072227" }}
      >
        Potter fans
      </p>
    </div>
  );
}

export default HomeView;
