import { BrowserRouter, Route, Routes } from "react-router-dom";
import PotionsGrid from "../pages/PotionsGrid";
import HomeView from "../views/HomeView";
import { AuthenticationProvider } from "../context/AuthenticationContext";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <AuthenticationProvider>
            <HomeView />
          </AuthenticationProvider>
        }
      />
      <Route path="/potions" element={<PotionsGrid />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
