import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../../../services/filmService";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import './filmDetail.css'

/**
 * Página de detalle de película
 * @param {*} props 
 * @returns 
 */
const FilmDetail = (props) => {
    let { idFilm } = useParams();
    let [film, setFilm] = useState({})

    useEffect(() => {
        api.getMovieData(idFilm)
            .then(resp => {
                setFilm(resp)
            })
    }, [idFilm])

    const imageUrl = 'https://image.tmdb.org/t/p/w220_and_h330_face' + film.poster_path
    return (
        <>
            <div className="film-detail">
                <div className="film-info">
                    <div className="film-image">
                        <Card sx={{}}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="330"
                                    image={imageUrl}
                                    alt={film.title}
                                />
                            </CardActionArea>
                        </Card>
                    </div>
                    <div className="film-data">
                        <h3>
                            {film.title}
                            <Stack direction="row" spacing={1}>
                                <Chip label={film.vote_average} color="primary" />
                            </Stack>
                        </h3>
                        <p>
                            {film.overview}
                        </p>
                        <p>
                            Géneros:
                        </p>
                        <Stack direction="row" spacing={1}>
                            {film?.genres?.map((gen, idx) => {
                                return (<Chip key={idx} label={gen.name} color="primary" />)
                            })}
                        </Stack>
                    </div>
                </div>
            </div>

        </>
    )
}


export default FilmDetail;