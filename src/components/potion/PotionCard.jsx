import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import PropTypes from "prop-types";


const base = "/harry-potter-api-react"
const DEFAULT_IMAGE =
  "https://ar.happyvalentinesday2020.online/pics/webstockreview.net/images/cauldron-clipart-harry-potter-cauldron-8.jpg";
function PotionCard({ potion }) {
  const navigate = useNavigate();
  const [potionImage, setPotionImage] = useState(potion.attributes.image);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        sx={{ height: 350 }}
        height="140"
        alt="potion"
        image={potionImage === null ? DEFAULT_IMAGE : potionImage}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {potion.attributes.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {potion.attributes.effect}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            navigate(`${base}/potions/${potion.id}`);
          }}
        >
          Details and info.
        </Button>
      </CardActions>
    </Card>
  );
}

PotionCard.propTypes = {
  potion: PropTypes.object,
};

export default PotionCard;
