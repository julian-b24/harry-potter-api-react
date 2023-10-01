import { useState, useEffect } from "react";
import axios from "../../config/axios"

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MovieCard from "../components/mvoie/MovieCard"


function MoviesGrid() {

  const [movies, setmovies] = useState([])

  const getmovies = async () => {
    try {
      const response = await axios.get('/movies')
      setmovies(response.data.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => { getmovies() }, [])

  const renderMovies = () => {
    return movies.map((movie) =>
    (<Grid item
      height="140"
      key={movie.id}
      sx={{ height: 550, padding: 2, alignContent: 'center', display: 'flex' }}
    >
      <MovieCard key={movie.id} movie={movie} />
    </Grid>)
    )
  }
  return (
    <div>
      <p
        className="pt-10 text-center harryp"
        style={{ fontSize: 100, color: "#313866" }}
      >
        Movies
      </p>
      <Box sx={{ width: '100%' }}>
      <Grid container
        alignItems="center"
        rowSpacing={1}
        columns={{ xs: 5 }}
        sx={{ justifyContent: 'center' }}
      >
        {renderMovies()}
      </Grid>
    </Box>

    </div>
  );
}

export default MoviesGrid;
