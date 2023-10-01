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

const Router = ({ openLoginModal }) => (
  <BrowserRouter>
    <Header openLoginModal={openLoginModal} />
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/movies" element={<MoviesGrid />} />
      <Route path="/movies/:id" element={<MovieDetails />} />
      <Route path="/characters" element={<CharactersGrid />} />
      <Route path="/characters/:id" element={<CharacterDetails />} />
      <Route path="/potions" element={<PotionsGrid />} />
      <Route path="/potions/:id" element={<PotionDetails />} />
      <Route path="/characters/test" element={<TestDetails />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
