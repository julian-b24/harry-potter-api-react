import axios from "../../config/axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import LinkIcon from '@mui/icons-material/Link';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import TransgenderIcon from '@mui/icons-material/Transgender';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PetsIcon from '@mui/icons-material/Pets';
import PublicIcon from '@mui/icons-material/Public';
import CastleIcon from '@mui/icons-material/Castle';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import PestControlRodentIcon from '@mui/icons-material/PestControlRodent';
import HeightIcon from '@mui/icons-material/Height';
import ScaleIcon from '@mui/icons-material/Scale';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import PaletteIcon from '@mui/icons-material/Palette';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';


function CharacterDetails() {
  const { id } = useParams();
  const [character, setcharacter] = useState(null);

  const getCharacter = async () => {
    try {
      const response = await axios.get("/characters/" + id);
      setcharacter(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCharacter();
  }, []);

  return (
    <>
      {character &&
        <Box sx={{ width: 300, borderRadius: 'sm', p: 1 }}>

          {/*character Image*/}
          <AspectRatio objectFit="contain" >
            <img
              src={character.attributes.image}
              srcSet={character.attributes.image}
              alt={character.attributes.slug}
            />
          </AspectRatio>

          {/*Character name*/}
          <Box>
            <Typography level="h3">{character.attributes.name}</Typography>
          </Box>

          {/*Alias names, family, jobs, romances and wands acordeons*/}
          <AccordionGroup sx={{ maxWidth: 400 }}>

            <Accordion disabled={character.attributes.alias_names === null}>
              <AccordionSummary>Alias names</AccordionSummary>
              <AccordionDetails>
                {character.attributes.alias_names}
              </AccordionDetails>
            </Accordion>

            <Accordion disabled={character.attributes.family_members === null}>
              <AccordionSummary>Family</AccordionSummary>
              <AccordionDetails>
                {character.attributes.family_members}
              </AccordionDetails>
            </Accordion>

            <Accordion disabled={character.attributes.jobs === null}>
              <AccordionSummary>Jobs</AccordionSummary>
              <AccordionDetails>
                {character.attributes.jobs}
              </AccordionDetails>
            </Accordion>

            <Accordion disabled={character.attributes.romances === null}>
              <AccordionSummary>Romances</AccordionSummary>
              <AccordionDetails>
                {character.attributes.romances}
              </AccordionDetails>
            </Accordion>

            <Accordion disabled={character.attributes.wands === null}>
              <AccordionSummary>Wands</AccordionSummary>
              <AccordionDetails>
                {character.attributes.wands}
              </AccordionDetails>
            </Accordion>

          </AccordionGroup>

          {/*Extra info: Born, gender, specie, hair color, eye color, skin color, height, weight,
             blood status, marital status, nationality, boggart, house, patronus, 
             animagus, died,  and wiki link*/}
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

            {/*Born*/}
            {character.attributes.born &&
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <DateRangeIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Born" secondary={character.attributes.born} />
              </ListItem>}

            {/*Gender*/}
            {character.attributes.gender &&
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <TransgenderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Gender" secondary={character.attributes.gender} />
              </ListItem>}

            {/*Specie*/}
            {character.attributes.specie &&
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <PetsIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Specie" secondary={character.attributes.specie} />
              </ListItem>}

            {/*Hair color*/}
            {character.attributes.hair_color &&
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <FormatColorFillIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Hair color" secondary={character.attributes.hair_color} />
              </ListItem>}

            {/*Eye color*/}
            {character.attributes.eye_color &&
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <VisibilityIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Eye color" secondary={character.attributes.eye_color} />
              </ListItem>}

            {/*Skin color*/}
            {character.attributes.skin_color &&
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <PaletteIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Skin color" secondary={character.attributes.skin_color} />
              </ListItem>}

            {/*Height*/}
            {character.attributes.height &&
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <HeightIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Height" secondary={character.attributes.height} />
              </ListItem>}

            {/*Weight*/}
            {character.attributes.weight &&
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <ScaleIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Weight" secondary={character.attributes.weight} />
              </ListItem>}

            {/*Blood Status*/}
            {character.attributes.blood_status &&
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <BloodtypeIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Blood Status" secondary={character.attributes.blood_status} />
              </ListItem>}

            {/*Marital status*/}
            {character.attributes.marital_status &&
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <FavoriteBorderIcon/>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Marital status" secondary={character.attributes.marital_status} />
              </ListItem>}

            {/*Nationality*/}
            {character.attributes.nationality &&
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <PublicIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Nationality" secondary={character.attributes.nationality} />
              </ListItem>}

            {/*Boggart*/}
            {character.attributes.boggart &&
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <PestControlRodentIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Boggart" secondary={character.attributes.boggart} />
              </ListItem>}

            {/*House*/}
            {character.attributes.house &&
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <CastleIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="House" secondary={character.attributes.house} />
              </ListItem>}

            {/*Patronus*/}
            {character.attributes.patronus &&
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <EmojiNatureIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Patronus" secondary={character.attributes.patronus} />
              </ListItem>}


            {/*Animagus*/}
            {character.attributes.animagus &&
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <PestControlRodentIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Animagus" secondary={character.attributes.animagus} />
              </ListItem>}

            {/*Died*/}
            {character.attributes.died &&
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <SentimentVeryDissatisfiedIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Died" secondary={character.attributes.died} />
              </ListItem>}


            {/*Wiki*/}
            {character.attributes.wiki &&
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <LinkIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Wiki" secondary={character.attributes.wiki} />
              </ListItem>}
          </List>

        </Box>}
    </>
  );
}

export default CharacterDetails