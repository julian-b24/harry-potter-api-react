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

import YouTubeIcon from '@mui/icons-material/YouTube';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LinkIcon from '@mui/icons-material/Link';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ExplicitIcon from '@mui/icons-material/Explicit';



function MovieDetails() {
  const { id } = useParams();
  const [movie, setmovie] = useState(null);

  const getmovie = async () => {
    try {
      const response = await axios.get("/movies/" + id);
      setmovie(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getmovie();
  }, []);

  return (
    <>
      {movie &&
        <Box sx={{ width: '100%', borderRadius: 'sm', p: 1 }}>

          {/*Movie poster*/}
          <AspectRatio objectFit="contain" >
            <img
              src={movie.attributes.poster}
              srcSet={movie.attributes.poster}
              alt={movie.attributes.slug}
            />
          </AspectRatio>

          {/*Movie title*/}
          <Box>
            <Typography level="h3">{movie.attributes.title}</Typography>
          </Box>

          {/*Movie Summary*/}
          <Box>
            <Typography level="title-lg">Summary</Typography>
            <Typography level="body-md">{movie.attributes.summary}</Typography>
          </Box>

          {/*Directors, Screenwriters, producers, cinematographers, editors and music acordeons*/}
          <AccordionGroup sx={{ maxWidth: 400 }}>

            <Accordion disabled={movie.attributes.driectors === null}>
              <AccordionSummary>Directors</AccordionSummary>
              <AccordionDetails>
                {movie.attributes.driectors}
              </AccordionDetails>
            </Accordion>

            <Accordion disabled={movie.attributes.screenwiters === null}>
              <AccordionSummary>Screenwiters</AccordionSummary>
              <AccordionDetails>
                {movie.attributes.screenwiters}
              </AccordionDetails>
            </Accordion>

            <Accordion disabled={movie.attributes.producers === null}>
              <AccordionSummary>Producers</AccordionSummary>
              <AccordionDetails>
                {movie.attributes.producers}
              </AccordionDetails>
            </Accordion>

            <Accordion disabled={movie.attributes.cinematographers === null}>
              <AccordionSummary>Cinematographers</AccordionSummary>
              <AccordionDetails>
                {movie.attributes.cinematographers}
              </AccordionDetails>
            </Accordion>

            <Accordion disabled={movie.attributes.editors === null}>
              <AccordionSummary>Editors</AccordionSummary>
              <AccordionDetails>
                {movie.attributes.editors}
              </AccordionDetails>
            </Accordion>

            <Accordion disabled={movie.attributes.music_composers === null}>
              <AccordionSummary>Music</AccordionSummary>
              <AccordionDetails>
                {movie.attributes.music_composers}
              </AccordionDetails>
            </Accordion>

          </AccordionGroup>

          {/*Extra info: Release date, running time, budget, box office, rating, trailer link and wiki link*/}
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

            {/*Release date*/}
            {movie.attributes.release_date &&
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <DateRangeIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Release date" secondary={movie.attributes.release_date} />
              </ListItem>}

            {/*Running Time*/}
            {movie.attributes.running_time &&
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <AccessTimeIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Running Time" secondary={movie.attributes.running_time} />
              </ListItem>}

            {/*Budget*/}
            {movie.attributes.budget &&
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <AttachMoneyIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Budget" secondary={movie.attributes.budget} />
              </ListItem>}

            {/*Box office*/}
            {movie.attributes.box_office &&
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <CurrencyExchangeIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Box office" secondary={movie.attributes.box_office} />
              </ListItem>}

            {/*Rating*/}
            {movie.attributes.rating &&
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <ExplicitIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Rating" secondary={movie.attributes.rating} />
              </ListItem>}

            {/*Trailer*/}
            {movie.attributes.trailer &&
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <YouTubeIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Trailer" secondary={movie.attributes.trailer} />
              </ListItem>}

            {/*Wiki*/}
            {movie.attributes.wiki &&
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <LinkIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Wiki" secondary={movie.attributes.wiki} />
              </ListItem>}
          </List>

        </Box>}
    </>
  );
}

export default MovieDetails