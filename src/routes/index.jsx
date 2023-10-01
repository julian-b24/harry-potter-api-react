import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeView from "../views/HomeView";
import MoviesGrid from "../pages/MoviesGrid";
import CharactersGrid from "../pages/CharactersGrid";
import PotionsGrid from "../pages/PotionsGrid";
import PotionDetails from "../pages/PotionDetails";
import CharacterDetails from "../pages/CharacterDetails";
import MovieDetails from "../pages/MovieDetails";
import TestDetails from "../pages/TestDetails";
import Header from "../components/Header";

const base = "/harry-potter-api-react/"

const Router = ({ openLoginModal }) => (
  <BrowserRouter>
    <Header openLoginModal={openLoginModal} />
    <Routes>
      <Route path={base} element={<HomeView />} />
      <Route path={base + "movies"}element={<MoviesGrid />} />
      <Route path={base + "movies/:id"}element={<MovieDetails />} />
      <Route path={base + "characters"}element={<CharactersGrid />} />
      <Route path={base + "characters/:id"}element={<CharacterDetails />} />
      <Route path={base + "potions"}element={<PotionsGrid />} />
      <Route path={base + "potions/:id"}element={<PotionDetails />} />
      <Route path={base + "characters/test"}element={<TestDetails />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
