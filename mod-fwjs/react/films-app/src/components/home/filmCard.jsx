import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
// import { Typography } from "@mui/material";

const FilmCard = (props) => {
    const film = props.film;
    const imageUrl = 'https://image.tmdb.org/t/p/w220_and_h330_face' + film.poster_path
    return (
        <Button>
            <Card sx={{ width: 200 }}>
                <CardMedia
                    sx={{ height: 330 }}
                    image={imageUrl}
                    title={film.title}
                />
                <CardContent>
                    {/* <Typography gutterBottom variant="h5" component="div">
                        {film.title}
                    </Typography> */}
                </CardContent>
                <CardActions>
                    <Button size="small">+ info</Button>
                </CardActions>
            </Card>
        </Button>


    )
}


export default FilmCard;