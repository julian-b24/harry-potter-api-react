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
import RequireAuth from "../components/RequireAuth";

const Router = ({ openLoginModal }) => (
  <BrowserRouter>
    <Header openLoginModal={openLoginModal} />
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route
        path="/movies"
        element={
          <RequireAuth>
            <MoviesGrid />
          </RequireAuth>
        }
      />
      <Route
        path="/movies/:id"
        element={
          <RequireAuth>
            <MovieDetails />
          </RequireAuth>
        }
      />
      <Route
        path="/characters"
        element={
          <RequireAuth>
            <CharactersGrid />
          </RequireAuth>
        }
      />
      <Route
        path="/characters/:id"
        element={
          <RequireAuth>
            <CharacterDetails />
          </RequireAuth>
        }
      />
      <Route
        path="/potions"
        element={
          <RequireAuth>
            <PotionsGrid />
          </RequireAuth>
        }
      />
      <Route
        path="/potions/:id"
        element={
          <RequireAuth>
            <PotionDetails />
          </RequireAuth>
        }
      />
      <Route path="/characters/test" element={<TestDetails />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
