import { useState } from "react";
import HomeView from "./views/HomeView";
import { AuthenticationProvider } from "./context/AuthenticationContext";
import "./App.css";

function App() {
  return (
    <AuthenticationProvider>
      <HomeView />
    </AuthenticationProvider>
  );
}

export default App;
