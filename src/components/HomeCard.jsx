import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AuthenticationContext from "../context/AuthenticationContext";

function HomeCard({ topic, image, openErrorAlert }) {
  const navigate = useNavigate();

  const { loggedIn } = useContext(AuthenticationContext);

  return (
    <Card
      className="mx-auto border-2 border-purple-900"
      sx={{ maxWidth: 450 }}
      onClick={() => {
        if (loggedIn) {
          navigate(`/${topic}`);
        } else {
          navigate("/?error");
          openErrorAlert();
        }
      }}
    >
      <CardActionArea>
        <CardMedia
          sx={{ height: 350 }}
          component="img"
          height="140"
          image={image}
          alt={topic}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {topic.charAt(0).toUpperCase() + topic.slice(1)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Get to know all about Harry Potter {topic}!!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default HomeCard;
