import { useState, useEffect } from "react";
import axios from "../../config/axios";
import PotionCard from "../components/potion/PotionCard";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function PotionsGrid() {
  const [potions, setPotions] = useState([]);

  const getPotions = async () => {
    try {
      const response = await axios.get("/potions");
      setPotions(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPotions();
  }, []);

  const renderPotions = () => {
    return potions.map((potion) => (
      <Grid
        item
        height="140"
        key={potion.id}
        sx={{
          height: 550,
          padding: 2,
          alignContent: "center",
          display: "flex",
        }}
      >
        <PotionCard key={potion.id} potion={potion} />
      </Grid>
    ));
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Grid
        container
        alignItems="center"
        rowSpacing={1}
        columns={{ xs: 5 }}
        sx={{ justifyContent: "center" }}
      >
        {renderPotions()}
      </Grid>
    </Box>
  );
}

export default PotionsGrid;
