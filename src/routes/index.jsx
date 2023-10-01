import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeView from "../views/HomeView";
import MoviesGrid from "../pages/MoviesGrid";
import CharactersGrid from "../pages/CharactersGrid";
import PotionsGrid from "../pages/PotionsGrid";
import PotionDetails from "../pages/PotionDetails";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/movies" element={<MoviesGrid />} />
      <Route path="/characters" element={<CharactersGrid />} />
      <Route path="/potions" element={<PotionsGrid />}>
        <Route path=":id" element={<PotionDetails/>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
