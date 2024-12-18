import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Typography, Box, Container } from '@mui/material';
import api from '../../services/tabletop-client.js';

const GameForm = ({ gameId }) => {
  const [game, setGame] = useState({
    title: '',
    authors: [],
    players: { min: '', max: '' },
    publisher: '',
    playTime: '',
    mechanics: [],
    description: '',
    imageUrl: '',
  });

  const [error, setError] = useState('');
  console.log('Valor de gameId:', gameId);
  // Cargar juego para editar
  useEffect(() => {
    if (gameId) {
      api.getGame(gameId)
        .then(data => setGame(data))
        .catch(err => setError('Error al cargar el juego'));
    }
  }, [gameId]);

  // Manejo de cambios en los campos
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Para campos de autores o mecánicas, dividirlos en arrays
    if (name === 'authors' || name === 'mechanics') {
      setGame({ ...game, [name]: value.split(',').map(item => item.trim()) });
    }
    // Para el campo de jugadores, actualizar los valores min y max como números
    else if (name === 'playersMin' || name === 'playersMax') {
      setGame({
        ...game,
        players: {
          ...game.players,
          [name === 'playersMin' ? 'min' : 'max']: Number(value)
        }
      });
    }
    // Para cualquier otro campo, actualizar normalmente
    else {
      setGame({ ...game, [name]: value });
    }
  };

  // Manejo de envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Si existe gameId, se actualiza, sino, se crea un nuevo juego
      if (gameId) {
        await api.updateGame(gameId, game); // Actualizamos el juego
        alert('Juego actualizado correctamente');
      } else {
        await api.createGame(game); // Creamos un nuevo juego
        alert('Juego creado correctamente');
      }
    } catch (err) {
      setError('Error al guardar el juego');
    }
  };

  return (
    <Container>
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h4">{gameId ? 'Editar Juego' : 'Crear Juego'}</Typography>

        {error && <Typography color="error">{error}</Typography>}

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Título"
                name="title"
                value={game.title}
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Autores (separados por coma)"
                name="authors"
                value={game.authors.join(', ')}
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Descripción"
                name="description"
                value={game.description}
                onChange={handleChange}
                multiline
                rows={4}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Jugadores Mínimos"
                type="number"
                name="playersMin"
                value={game.players.min}
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Jugadores Máximos"
                type="number"
                name="playersMax"
                value={game.players.max}
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Editorial"
                name="publisher"
                value={game.publisher}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Tiempo de juego (en minutos)"
                type="number"
                name="playTime"
                value={game.playTime}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Mecánicas (separadas por coma)"
                name="mechanics"
                value={game.mechanics.join(', ')}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="URL de la imagen"
                name="imageUrl"
                value={game.imageUrl}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                {gameId ? 'Actualizar Juego' : 'Crear Juego'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default GameForm;
