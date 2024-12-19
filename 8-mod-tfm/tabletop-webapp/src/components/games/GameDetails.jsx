import { useState, useEffect } from 'react';
import api from '../../services/tabletop-client.js';
import { Grid, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const GameDetails = ({ gameId }) => {
    const [game, setGame] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetch() {
            const data = await api.getGame(gameId);
            setGame(data);
        }
        fetch();
    }, [gameId])

    if (!game) {
        return <>Cargando...</>
    }

    let players = '';
    if (game.players) {
        if (game.players.min === game.players.max)
            players = game.players.min;
        else
            players = game.players.min + ' - ' + game.players.max;
    }

    const handleGoToEdit = () => navigate(`/game/edit/${gameId}`);

    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <h2>Catálogo de juegos</h2>
                <Button variant="outlined" onClick={handleGoToEdit}>
                    Editar
                </Button>
            </div>
            <Grid container style={{ height: '100vh' }}>
                <Grid
                    item
                    xs={12}
                    md={6}
                    style={{
                        padding: '20px',
                        overflowY: 'auto',
                        alignSelf: 'flex-start',
                    }}
                >
                    <Typography variant="h4" gutterBottom>
                        {game.title || ''}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        <strong>Autores:</strong> {game.authors?.join(', ') || ''}
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                        <strong>Descripción:</strong> {game.description || ''}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        <strong>Jugadores:</strong> {players}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        <strong>Editorial:</strong> {game.publisher || ''}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        <strong>Tiempo de juego:</strong> {game.playTime + ' min.' || ''}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        <strong>Mecánicas:</strong> {game.mechanics || ''}
                    </Typography>
                </Grid>

                {/* Columna derecha: Imagen */}
                <Grid item xs={12} md={6}>
                    {game.imageUrl ? (
                        <img
                            src={api.getImgUri(game.imageUrl)}
                            alt={game.title || 'Imagen del juego'}
                            style={{
                                maxWidth: '500px',
                                maxHeight: '100%',
                                objectFit: 'contain', // Ajusta la imagen al tamaño disponible sin recortarla
                            }}
                        />
                    ) : (
                        <Typography variant="body1" color="textSecondary">
                            Sin imagen disponible
                        </Typography>
                    )}
                </Grid>
            </Grid>
        </>
    );

}

export default GameDetails;