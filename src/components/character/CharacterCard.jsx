import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import PropTypes from 'prop-types'

function CharacterCard({ character }) {
    return (
        <Card sx={{ maxWidth: 345}}>
            <CardMedia
                component="img"
                sx={{ height: 350 }}
                height="140"
                alt="character"
                image={character.attributes.image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {character.attributes.name}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href={"/characters/" + character.id}>Details and info.</Button>
            </CardActions>
        </Card>
    )
}

CharacterCard.propTypes = {
    character: PropTypes.object
}

export default CharacterCard