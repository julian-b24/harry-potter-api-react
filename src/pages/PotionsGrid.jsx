import { useState, useEffect } from "react"
import axios from "../../config/axios"
import PotionCard from "../components/potion/PotionCard"

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function PotionsGrid() {

  const [potions, setPotions] = useState([])

  const getPotions = async () => {
    try {
      const response = await axios.get('/potions')
      setPotions(response.data.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {getPotions()}, [])

  const renderPotions = () => {
    return potions.map((potion) => 
      (<Grid item xs={6} key={potion.id}>
        <PotionCard key={potion.id} potion={potion}/>
      </Grid>)
    )
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {renderPotions()}
      </Grid>
    </Box>
  )
}

export default PotionsGrid