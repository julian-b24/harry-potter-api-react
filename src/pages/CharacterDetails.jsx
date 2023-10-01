import axios from "../../config/axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Grid from "@mui/material/Unstable_Grid2";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary from "@mui/joy/AccordionSummary";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

import { deepPurple } from "@mui/material/colors";
import LinkIcon from "@mui/icons-material/Link";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import TransgenderIcon from "@mui/icons-material/Transgender";
import DateRangeIcon from "@mui/icons-material/DateRange";
import PetsIcon from "@mui/icons-material/Pets";
import PublicIcon from "@mui/icons-material/Public";
import CastleIcon from "@mui/icons-material/Castle";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";
import PestControlRodentIcon from "@mui/icons-material/PestControlRodent";
import HeightIcon from "@mui/icons-material/Height";
import ScaleIcon from "@mui/icons-material/Scale";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import PaletteIcon from "@mui/icons-material/Palette";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import { Button } from "@mui/material";

import storage from "../firebaseConfig.js";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const DEFAULT_IMAGE =
  "https://i.pinimg.com/1200x/0d/05/ec/0d05ecd57fb6909002a47dcc8ef32fe8.jpg";
function CharacterDetails() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [file, setFile] = useState(null);
  const [characterImage, setCharacterImage] = useState(null);

  const getCharacter = async () => {
    try {
      const response = await axios.get("/characters/" + id);
      setCharacter(response.data.data);
      setCharacterImage(response.data.data.attributes.image);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileChange = (event) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!file) {
      alert("Please choose a file first!");
      return;
    }

    const storageRef = ref(storage, `/characters-imgs/${character.id}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (err) => console.log(err),
      () => {
        alert("Upload successful!");
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setCharacterImage(url);
        });
      }
    );
  };

  const fetchFirebaseImage = () => {
    // Connect to Firebase bucket to get the prevously stored character's image

    const storageRef = ref(storage, `/characters-imgs/${id}`);
    try {
      getDownloadURL(storageRef).then((url) => {
        setCharacterImage(url);
        console.log(url);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCharacter();
  }, []);

  useEffect(() => {
    fetchFirebaseImage();
  }, [character]);

  return (
    <>
      {character && (
        <Box
          sx={{
            width: "100%",
            borderRadius: "sm",
            p: 4,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{ display: "flexbox", justifyContent: "space-evenly" }}
          >
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/*Potion Image*/}
              <AspectRatio objectFit="contain" sx={{ width: 600 }}>
                <img
                  src={characterImage === null ? DEFAULT_IMAGE : characterImage}
                  alt={character.attributes.slug}
                />
              </AspectRatio>
              <div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                />
                <Button
                  onClick={() => {
                    handleUpload();
                  }}
                >
                  Change image
                </Button>
              </div>
            </Grid>

            <Grid item xs={6}>
              {/*Character name*/}
              <Box>
                <Typography level="h3">{character.attributes.name}</Typography>
              </Box>

              {/*Alias names, family, jobs, romances and wands acordeons*/}
              <AccordionGroup sx={{ maxWidth: "100%", fontSize: "1.2em" }}>
                <Accordion
                  size="lg"
                  disabled={character.attributes.alias_names === null}
                >
                  <AccordionSummary>Alias names</AccordionSummary>
                  <AccordionDetails>
                    {character.attributes.alias_names}
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  size="lg"
                  disabled={character.attributes.family_members === null}
                >
                  <AccordionSummary>Family</AccordionSummary>
                  <AccordionDetails>
                    {character.attributes.family_members}
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  size="lg"
                  disabled={character.attributes.jobs === null}
                >
                  <AccordionSummary>Jobs</AccordionSummary>
                  <AccordionDetails>
                    {character.attributes.jobs}
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  size="lg"
                  disabled={character.attributes.romances === null}
                >
                  <AccordionSummary>Romances</AccordionSummary>
                  <AccordionDetails>
                    {character.attributes.romances}
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  size="lg"
                  disabled={character.attributes.wands === null}
                >
                  <AccordionSummary>Wands</AccordionSummary>
                  <AccordionDetails>
                    {character.attributes.wands}
                  </AccordionDetails>
                </Accordion>
              </AccordionGroup>

              {/*Extra info: Born, gender, specie, hair color, eye color, skin color, height, weight,
             blood status, marital status, nationality, boggart, house, patronus, 
             animagus, died,  and wiki link*/}
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "nowrap",
                }}
              >
                {/*Born*/}
                {character.attributes.born && (
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: deepPurple[400] }}>
                        <DateRangeIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Born"
                      secondary={character.attributes.born}
                    />
                  </ListItem>
                )}

                {/*Gender*/}
                {character.attributes.gender && (
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: deepPurple[400] }}>
                        <TransgenderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Gender"
                      secondary={character.attributes.gender}
                    />
                  </ListItem>
                )}

                {/*Specie*/}
                {character.attributes.specie && (
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: deepPurple[400] }}>
                        <PetsIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Specie"
                      secondary={character.attributes.specie}
                    />
                  </ListItem>
                )}

                {/*Hair color*/}
                {character.attributes.hair_color && (
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: deepPurple[400] }}>
                        <FormatColorFillIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Hair color"
                      secondary={character.attributes.hair_color}
                    />
                  </ListItem>
                )}

                {/*Eye color*/}
                {character.attributes.eye_color && (
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: deepPurple[400] }}>
                        <VisibilityIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Eye color"
                      secondary={character.attributes.eye_color}
                    />
                  </ListItem>
                )}

                {/*Skin color*/}
                {character.attributes.skin_color && (
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: deepPurple[400] }}>
                        <PaletteIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Skin color"
                      secondary={character.attributes.skin_color}
                    />
                  </ListItem>
                )}

                {/*Height*/}
                {character.attributes.height && (
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: deepPurple[400] }}>
                        <HeightIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Height"
                      secondary={character.attributes.height}
                    />
                  </ListItem>
                )}

                {/*Weight*/}
                {character.attributes.weight && (
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: deepPurple[400] }}>
                        <ScaleIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Weight"
                      secondary={character.attributes.weight}
                    />
                  </ListItem>
                )}

                {/*Blood Status*/}
                {character.attributes.blood_status && (
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: deepPurple[400] }}>
                        <BloodtypeIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Blood Status"
                      secondary={character.attributes.blood_status}
                    />
                  </ListItem>
                )}

                {/*Marital status*/}
                {character.attributes.marital_status && (
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: deepPurple[400] }}>
                        <FavoriteBorderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Marital status"
                      secondary={character.attributes.marital_status}
                    />
                  </ListItem>
                )}

                {/*Nationality*/}
                {character.attributes.nationality && (
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: deepPurple[400] }}>
                        <PublicIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Nationality"
                      secondary={character.attributes.nationality}
                    />
                  </ListItem>
                )}

                {/*Boggart*/}
                {character.attributes.boggart && (
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: deepPurple[400] }}>
                        <PestControlRodentIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Boggart"
                      secondary={character.attributes.boggart}
                    />
                  </ListItem>
                )}

                {/*House*/}
                {character.attributes.house && (
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: deepPurple[400] }}>
                        <CastleIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="House"
                      secondary={character.attributes.house}
                    />
                  </ListItem>
                )}

                {/*Patronus*/}
                {character.attributes.patronus && (
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: deepPurple[400] }}>
                        <EmojiNatureIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Patronus"
                      secondary={character.attributes.patronus}
                    />
                  </ListItem>
                )}

                {/*Animagus*/}
                {character.attributes.animagus && (
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: deepPurple[400] }}>
                        <PestControlRodentIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Animagus"
                      secondary={character.attributes.animagus}
                    />
                  </ListItem>
                )}

                {/*Died*/}
                {character.attributes.died && (
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: deepPurple[400] }}>
                        <SentimentVeryDissatisfiedIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Died"
                      secondary={character.attributes.died}
                    />
                  </ListItem>
                )}

                {/*Wiki*/}
                {character.attributes.wiki && (
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: deepPurple[400] }}>
                        <LinkIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Wiki"
                      secondary={character.attributes.wiki}
                    />
                  </ListItem>
                )}
              </List>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
}

export default CharacterDetails;
