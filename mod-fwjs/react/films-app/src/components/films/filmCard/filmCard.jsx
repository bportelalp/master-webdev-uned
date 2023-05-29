import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
// import { Typography } from "@mui/material";

/**
 * Tarjeta de información de cada película
 * @param {*} props 
 * @returns 
 */
const FilmCard = (props) => {
    // hook navigate
    const navigate = useNavigate();
    const gotoFilm = () => navigate(`/film-detail/${props.film.id}/${props.film.title}`);
    // props
    const film = props.film;
    const imageUrl = 'https://image.tmdb.org/t/p/w220_and_h330_face' + film.poster_path
    
    return (
        <Card sx={{ width: 200, margin: '0.25em' }}>
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
                <Button size="small" onClick={gotoFilm}>+ info</Button>
            </CardActions>
        </Card>


    )
}


export default FilmCard;