import { useNavigate } from "react-router-dom";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import PropTypes from 'prop-types'


const base = "/harry-potter-api-react"
function MovieCard({ movie }) {
    const navigate = useNavigate();
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                sx={{ height: 350 }}
                height="140"
                alt="movie"
                image={movie.attributes.poster}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {movie.attributes.title}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small"
                    onClick={() => {
                        navigate(`${base}/movies/${movie.id}`);
                    }}
                >Get Details</Button>
            </CardActions>
        </Card>
    )
}

MovieCard.propTypes = {
    movie: PropTypes.object
}

export default MovieCard