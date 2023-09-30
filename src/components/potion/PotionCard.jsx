import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import PropTypes from 'prop-types'


function PotionCard({ potion }) {
    return (
        <Card sx={{ maxWidth: 345}}>
            <CardMedia
                component="img"
                sx={{ height: 350 }}
                height="140"
                alt="potion"
                image={potion.attributes.image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {potion.attributes.slug}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {potion.attributes.effect}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Details and info.</Button>
            </CardActions>
        </Card>
    )
}

PotionCard.propTypes = {
    potion: PropTypes.object
}

export default PotionCard