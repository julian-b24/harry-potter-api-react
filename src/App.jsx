import "./App.css";
import Header from "./components/Header";
import LoginModal from "./components/LoginModal";
import { AuthenticationProvider } from "./context/AuthenticationContext";
import "./fonts/HarryP.ttf";
import Router from "./routes/index";
import { useState } from "react";

function App() {
  const [loginModal, setLoginModal] = useState(false);

  const openLoginModal = () => {
    setLoginModal(true);
  };

  const closeLoginModal = () => {
    setLoginModal(false);
  };

  return (
    <>
      <AuthenticationProvider>
        <div
          className="min-h-screen w-screen"
          style={{ backgroundColor: "#A084E8" }}
        >
          <Header openLoginModal={openLoginModal} />
          {loginModal && <LoginModal closeLoginModal={closeLoginModal} />}
          <Router />
        </div>
      </AuthenticationProvider>
    </>
  );
}

export default App;
