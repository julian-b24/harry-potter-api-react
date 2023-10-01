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

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import AbcIcon from '@mui/icons-material/Abc';
import SickIcon from '@mui/icons-material/Sick';
import LinkIcon from '@mui/icons-material/Link';


function PotionDetails() {
  const { id } = useParams();
  const [potion, setPotion] = useState(null);

  const getPotion = async () => {
    try {
      const response = await axios.get("/potions/" + id);
      setPotion(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPotion();
  }, []);

  return (
    <>
      {potion &&
        <Box sx={{ width: 300, borderRadius: 'sm', p: 1 }}>

          {/*Potion Image*/}
          <AspectRatio objectFit="contain" >
            <img
              src={potion.attributes.image}
              srcSet={potion.attributes.image}
              alt={potion.attributes.slug}
            />
          </AspectRatio>

          <Box>
            <Typography level="h3">{potion.attributes.name}</Typography>
          </Box>

          {/*Ingredients, inventors, manufacturers and characteristics acordeons*/}
          <AccordionGroup sx={{ maxWidth: 400 }}>

            <Accordion disabled={potion.attributes.characteristics === null}>
              <AccordionSummary>Characteristics</AccordionSummary>
              <AccordionDetails>
                {potion.attributes.characteristics}
              </AccordionDetails>
            </Accordion>

            <Accordion disabled={potion.attributes.inventors === null}>
              <AccordionSummary>Inventors</AccordionSummary>
              <AccordionDetails>
                {potion.attributes.inventors}
              </AccordionDetails>
            </Accordion>

            <Accordion disabled={potion.attributes.manufacturers === null}>
              <AccordionSummary>Manufacturers</AccordionSummary>
              <AccordionDetails>
                {potion.attributes.manufacturers}
              </AccordionDetails>
            </Accordion>

            <Accordion disabled={potion.attributes.ingredients === null}>
              <AccordionSummary>Ingredients</AccordionSummary>
              <AccordionDetails>
                {potion.attributes.ingredients}
              </AccordionDetails>
            </Accordion>

          </AccordionGroup>

          {/*Extra info: Difficulty, effect, side effects, time and wiki link*/}
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

            {/*Effect*/}
            {potion.attributes.effect &&
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <AutoFixHighIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Effect" secondary={potion.attributes.effect} />
              </ListItem>}

            {/*Time*/}
            {potion.attributes.time &&
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <AccessTimeIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Time" secondary={potion.attributes.time} />
              </ListItem>}

            {/*Difficulty*/}
            {potion.attributes.difficulty &&
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <AbcIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Difficulty" secondary={potion.attributes.difficulty} />
              </ListItem>}

            {/*Side effects*/}
            {potion.attributes.side_effects &&
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <SickIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Side effects" secondary={potion.attributes.side_effects} />
              </ListItem>}

            {/*Wiki*/}
            {potion.attributes.wiki &&
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <LinkIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Wiki" secondary={potion.attributes.wiki} />
              </ListItem>}
          </List>

        </Box>}
    </>
  );
}

export default PotionDetails;
