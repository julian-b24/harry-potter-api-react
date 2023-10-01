import React, { useContext, useEffect, useState } from "react";
import HomeCard from "../components/HomeCard";
import { Alert, Snackbar } from "@mui/material";

function HomeView() {
  const [error, setError] = useState(false);
  const [vertical, setVertical] = useState("top");
  const [horizontal, setHorizontal] = useState("center");

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);

    if (searchParams.has("error")) {
      setError(true);
    }
  }, []);

  const handleOpen = () => {
    console.log("se ejecuta");
    setError(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setError(false);
  };

  return (
    <div>
      <Snackbar
        open={error}
        autoHideDuration={5000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert
          onClose={handleClose}
          severity="error"
          sx={{ width: "100%" }}
          className="items-center"
        >
          <p className="text-lg">
            <strong>Error:</strong> Please login first!
          </p>
        </Alert>
      </Snackbar>

      <p
        className="pt-10 text-center harryp"
        style={{ fontSize: 100, color: "#313866" }}
      >
        Potter Wiki
      </p>

      {/* Cards */}
      <div className="mx-32 my-14 flex lg:flex-row sm:flex-col items-center justify-center">
        {/* Movies */}
        <HomeCard
          topic="movies"
          image="https://snworksceo.imgix.net/ohi/ee8e374e-cb30-4d91-8e2c-91d8d66be757.sized-1000x1000.PNG?w=1500&ar=4%3A3&fit=crop&crop=faces&facepad=3&auto=format"
          openErrorAlert={handleOpen}
        />

        {/* Characters */}
        <HomeCard
          topic="characters"
          image="https://images.thedirect.com/media/article_full/harry-potters.jpg"
          openErrorAlert={handleOpen}
        />

        {/* Potions */}
        <HomeCard
          topic="potions"
          image="https://images.ctfassets.net/usf1vwtuqyxm/5k4RF8dHnaSEygWIEcSk8W/d6a8a5edb75dd378a813aa2c346a65ab/HoraceSlughorn_WB_F6_SlughornTeachingPotions_Still_080615_Land.jpg?fm=jpg&q=70&w=2560"
          openErrorAlert={handleOpen}
        />
      </div>
    </div>
  );
}

export default HomeView;
