import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function HomePage() {
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
        <Card
          className="mx-auto border-2 border-purple-900"
          sx={{ maxWidth: 450 }}
        >
          <CardActionArea>
            <CardMedia
              sx={{ height: 350 }}
              component="img"
              height="140"
              image="https://snworksceo.imgix.net/ohi/ee8e374e-cb30-4d91-8e2c-91d8d66be757.sized-1000x1000.PNG?w=1500&ar=4%3A3&fit=crop&crop=faces&facepad=3&auto=format"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Movies
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Get to know all about Harry Potter movies!!
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        {/* Characters */}
        <Card
          className="mx-auto border-2 border-purple-900"
          sx={{ maxWidth: 450 }}
        >
          <CardActionArea>
            <CardMedia
              sx={{ height: 350 }}
              component="img"
              height="140"
              image="https://images.thedirect.com/media/article_full/harry-potters.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Characters
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Get to know all about Harry Potter characters!!
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        {/* Potions */}
        <Card
          className="mx-auto border-2 border-purple-900"
          sx={{ maxWidth: 450 }}
        >
          <CardActionArea>
            <CardMedia
              sx={{ height: 350 }}
              component="img"
              height="140"
              image="https://images.ctfassets.net/usf1vwtuqyxm/5k4RF8dHnaSEygWIEcSk8W/d6a8a5edb75dd378a813aa2c346a65ab/HoraceSlughorn_WB_F6_SlughornTeachingPotions_Still_080615_Land.jpg?fm=jpg&q=70&w=2560"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Potions
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Get to know all about Harry Potter potions!!
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}

export default HomePage;
