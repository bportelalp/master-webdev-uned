
import { Card, CardContent, Typography, Grid, CardMedia, CardActions, Button } from '@mui/material';
import api from '../../services/tabletop-client.js';
import { useNavigate } from 'react-router-dom';

const GameCard = ({ game, index }) => {
    const navigation = useNavigate();
    let authors = [];
    if (game.authors && Array.isArray(game.authors)) {
        authors = game.authors;
    }

    const handleGoDetails = () => navigation(`/game/${game._id}`);

    return (
        <Grid item xs={2} sm={6} md={2} key={index}>
            <Card>
                <CardMedia
                    sx={{ height: 140 }}
                    image={api.getImgUri(game.imageUrl)}
                    title={game.title}
                />
                <CardContent>
                    <Typography variant="h6">{game.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                        {authors.join(', ')}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary" onClick={handleGoDetails}>
                        Detalles
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default GameCard;