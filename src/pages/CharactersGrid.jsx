import { useState, useEffect } from "react";
import axios from "../../config/axios"

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CharacterCard from "../components/character/CharacterCard"

function CharactersGrid() {

  const [characters, setcharacters] = useState([])

  const getcharacters = async () => {
    try {
      const response = await axios.get('/characters')
      setcharacters(response.data.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => { getcharacters() }, [])

  const renderCharacters = () => {
    return characters.map((character) =>
    (<Grid item
      height="140"
      key={character.id}
      sx={{ height: 550, padding: 2, alignContent: 'center', display: 'flex' }}
    >
      <CharacterCard key={character.id} character={character} />
    </Grid>)
    )
  }
  return (
    <div>
      <p
        className="pt-10 text-center harryp"
        style={{ fontSize: 100, color: "#313866" }}
      >
        Harry Potter Characters
      </p>
      <Box sx={{ width: '100%' }}>
      <Grid container
        alignItems="center"
        rowSpacing={1}
        columns={{ xs: 5 }}
        sx={{ justifyContent: 'center' }}
      >
        {renderCharacters()}
      </Grid>
    </Box>

    </div>
  );
}

export default CharactersGrid;
