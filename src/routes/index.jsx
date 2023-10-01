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

const base = "/harry-potter-api-react/";

const Router = ({ openLoginModal }) => (
  <BrowserRouter>
    <Header openLoginModal={openLoginModal} />
    <Routes>
      <Route path={base} element={<HomeView />} />
      <Route
        path={base + "movies"}
        element={
          <RequireAuth>
            <MoviesGrid />
          </RequireAuth>
        }
      />
      <Route
        path={base + "movies/:id"}
        element={
          <RequireAuth>
            <MovieDetails />
          </RequireAuth>
        }
      />
      <Route
        path={base + "characters"}
        element={
          <RequireAuth>
            <CharactersGrid />
          </RequireAuth>
        }
      />
      <Route
        path={base + "characters/:id"}
        element={
          <RequireAuth>
            <CharacterDetails />
          </RequireAuth>
        }
      />
      <Route
        path={base + "potions"}
        element={
          <RequireAuth>
            <PotionsGrid />
          </RequireAuth>
        }
      />
      <Route
        path={base + "potions/:id"}
        element={
          <RequireAuth>
            <PotionDetails />
          </RequireAuth>
        }
      />
      <Route path={base + "characters/test"} element={<TestDetails />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
