import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeView from "../views/HomeView";
import MoviesGrid from "../pages/MoviesGrid";
import CharactersGrid from "../pages/CharactersGrid";
import PotionsGrid from "../pages/PotionsGrid";
import PotionDetails from "../pages/PotionDetails";
import CharacterDetails from "../pages/CharacterDetails";
import MovieDetails from "../pages/MovieDetails";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/movies" element={<MoviesGrid />}>
        <Route path=":id" element={<MovieDetails />} />
      </Route>
      <Route path="/characters" element={<CharactersGrid />}>
        <Route path=":id" element={<CharacterDetails />} />
      </Route>
      <Route path="/potions" element={<PotionsGrid />}>
        <Route path=":id" element={<PotionDetails />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
