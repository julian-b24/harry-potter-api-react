import { useEffect, useState } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import storage from "../../firebaseConfig.js";
import { ref, getDownloadURL, listAll } from "firebase/storage";

import PropTypes from "prop-types";


const base = "/harry-potter-api-react"
const DEFAULT_IMAGE =
  "https://i.pinimg.com/1200x/0d/05/ec/0d05ecd57fb6909002a47dcc8ef32fe8.jpg";
function CharacterCard({ character }) {
  const [characterImage, setCharacterImage] = useState(
    character.attributes.image
  );

  const fetchFirebaseImage = () => {
    // Connect to Firebase bucket to get the prevously stored character's image

    // const storageRef = ref(storage, `/characters-imgs/${character.id}.jpg`);
    // try {
    //   getDownloadURL(storageRef).then((url) => {
    //     setCharacterImage(url);
    //     console.log(url);
    //   });
    // } catch (error) {}

    const storageRef = ref(storage, "/characters-imgs");

    listAll(storageRef)
      .then((res) => {
        // Search file by name
        const imageFile = res.items.find((item) =>
          item.name.includes(character.id)
        );

        if (imageFile) {
          // Get the download URL of the found file
          getDownloadURL(imageFile).then((url) => {
            setCharacterImage(url);
          });
        } else {
        }
      })
      .catch((error) => {
        console.error("Error al buscar la imagen:", error);
      });
  };

  useEffect(() => {
    fetchFirebaseImage();
  }, []);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        sx={{ height: 350 }}
        height="140"
        alt="character"
        image={characterImage === null ? DEFAULT_IMAGE : characterImage}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {character.attributes.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={base + "/characters/" + character.id}>
          Details and info.
        </Button>
      </CardActions>
    </Card>
  );
}

CharacterCard.propTypes = {
  character: PropTypes.object,
};

export default CharacterCard;
