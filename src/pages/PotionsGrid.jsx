import { useState, useEffect } from "react";
import axios from "../../config/axios";
import PotionCard from "../components/potion/PotionCard";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Pagination from '@mui/material/Pagination';


function PotionsGrid() {
  const [potions, setPotions] = useState([]);
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const getPotions = async () => {
    try {
      const response = await axios.get("/potions?page[number]=" +  page);
      setPotions(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPotions();
  }, [page]);

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
    <div>
      <p
        className="pt-10 text-center harryp"
        style={{ fontSize: 100, color: "#313866" }}
      >
        Potions
      </p>
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
      <div className="flex justify-center">
        <Pagination variant="outlined" color="secondary"
        count={2} page={page} onChange={handleChange} />
      </div>
    </div>
  );
}

export default PotionsGrid;
