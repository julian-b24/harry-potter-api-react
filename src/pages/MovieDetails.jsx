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
import YouTubeIcon from "@mui/icons-material/YouTube";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LinkIcon from "@mui/icons-material/Link";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import DateRangeIcon from "@mui/icons-material/DateRange";
import ExplicitIcon from "@mui/icons-material/Explicit";

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
      {movie && (
        <Box sx={{
          width: "100%",
          borderRadius: "sm",
          p: 4,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}>

          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{ display: "flexbox", justifyContent: "space-evenly" }}
          >
            <Grid item xs={6} sx={{ display: "flex" }}>
              {/*Movie poster*/}
              <AspectRatio objectFit="contain">
                <img src={movie.attributes.poster} alt={movie.attributes.slug} />
              </AspectRatio>
            </Grid>

            <Grid item xs={6}>
              <div>
                {/*Movie title*/}
                <Box>
                  <Typography level="h3">{movie.attributes.title}</Typography>
                </Box>

                {/*Movie Summary*/}
                <Box>
                  <Typography level="title-lg">Summary</Typography>
                  <Typography level="body-md">{movie.attributes.summary}</Typography>
                </Box>
              </div>


              {/*Directors, Screenwriters, producers, cinematographers, editors and music acordeons*/}
              <AccordionGroup sx={{ maxWidth: "100%", fontSize: "1.2em" }}>
                <Accordion size="lg" disabled={movie.attributes.directors === null}>
                  <AccordionSummary>Directors</AccordionSummary>
                  <AccordionDetails>{movie.attributes.directors}</AccordionDetails>
                </Accordion>

                <Accordion size="lg" disabled={movie.attributes.screenwriters === null}>
                  <AccordionSummary>Screenwiters</AccordionSummary>
                  <AccordionDetails>
                    {movie.attributes.screenwriters}
                  </AccordionDetails>
                </Accordion>

                <Accordion size="lg" disabled={movie.attributes.producers === null}>
                  <AccordionSummary>Producers</AccordionSummary>
                  <AccordionDetails>{movie.attributes.producers}</AccordionDetails>
                </Accordion>

                <Accordion size="lg" disabled={movie.attributes.cinematographers === null}>
                  <AccordionSummary>Cinematographers</AccordionSummary>
                  <AccordionDetails>
                    {movie.attributes.cinematographers}
                  </AccordionDetails>
                </Accordion>

                <Accordion size="lg" disabled={movie.attributes.editors === null}>
                  <AccordionSummary>Editors</AccordionSummary>
                  <AccordionDetails>{movie.attributes.editors}</AccordionDetails>
                </Accordion>

                <Accordion size="lg" disabled={movie.attributes.music_composers === null}>
                  <AccordionSummary>Music</AccordionSummary>
                  <AccordionDetails>
                    {movie.attributes.music_composers}
                  </AccordionDetails>
                </Accordion>
              </AccordionGroup>

            </Grid>

            <Grid item sx={{display: 'flex', justifyContent: 'flex-start'}}>
              {/*Extra info: Release date, running time, budget, box office, rating, trailer link and wiki link*/}
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "nowrap",
                }}
              >
                {/*Release date*/}
                {movie.attributes.release_date && (
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: deepPurple[400] }} >
                        <DateRangeIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Release date"
                      secondary={movie.attributes.release_date}
                    />
                  </ListItem>
                )}

                {/*Running Time*/}
                {movie.attributes.running_time && (
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: deepPurple[400] }} >
                        <AccessTimeIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Running Time"
                      secondary={movie.attributes.running_time}
                    />
                  </ListItem>
                )}

                {/*Budget*/}
                {movie.attributes.budget && (
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: deepPurple[400] }} >
                        <AttachMoneyIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Budget"
                      secondary={movie.attributes.budget}
                    />
                  </ListItem>
                )}

                {/*Box office*/}
                {movie.attributes.box_office && (
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: deepPurple[400] }} >
                        <CurrencyExchangeIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Box office"
                      secondary={movie.attributes.box_office}
                    />
                  </ListItem>
                )}

                {/*Rating*/}
                {movie.attributes.rating && (
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: deepPurple[400] }} >
                        <ExplicitIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Rating"
                      secondary={movie.attributes.rating}
                    />
                  </ListItem>
                )}

                {/*Trailer*/}
                {movie.attributes.trailer && (
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: deepPurple[400] }} >
                        <YouTubeIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Trailer"
                      secondary={movie.attributes.trailer}
                    />
                  </ListItem>
                )}

                {/*Wiki*/}
                {movie.attributes.wiki && (
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: deepPurple[400] }} >
                        <LinkIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Wiki"
                      secondary={movie.attributes.wiki}
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

export default MovieDetails;
