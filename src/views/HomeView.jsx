import React from "react";
import HomeCard from "../components/HomeCard";

function HomeView() {
  return (
    <div>
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
        />

        {/* Characters */}
        <HomeCard
          topic="characters"
          image="https://images.thedirect.com/media/article_full/harry-potters.jpg"
        />

        {/* Potions */}
        <HomeCard
          topic="potions"
          image="https://images.ctfassets.net/usf1vwtuqyxm/5k4RF8dHnaSEygWIEcSk8W/d6a8a5edb75dd378a813aa2c346a65ab/HoraceSlughorn_WB_F6_SlughornTeachingPotions_Still_080615_Land.jpg?fm=jpg&q=70&w=2560"
        />
      </div>
    </div>
  );
}

export default HomeView;
