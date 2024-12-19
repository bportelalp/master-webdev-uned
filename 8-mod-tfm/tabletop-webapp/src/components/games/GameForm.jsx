import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Grid, Typography, Box, Container } from '@mui/material';
import api from '../../services/tabletop-client.js';

const GameForm = ({ gameId }) => {
  const navigate = useNavigate();
  const [game, setGame] = useState({
    title: '',
    authorsCommaSeparated: '',
    players: { min: 0, max: 0 },
    publisher: '',
    playTime: 0,
    mechanicsCommaSeparated: '',
    description: '',
    imageUrl: '',
  });
  const [previewImage, setPreviewImage] = useState(''); // Imagen en memoria para mostrar en vista previa
  const [newImage, setNewImage] = useState(null); // Nueva imagen seleccionada
  const [error, setError] = useState('');

  console.log('Valor de gameId:', gameId);
  // Cargar juego para editar
  useEffect(() => {
    if (gameId) {
      api.getGame(gameId)
        .then(data => {
          data.authorsCommaSeparated = data.authors.join(', ');
          data.mechanicsCommaSeparated = data.mechanics.join(', ');

          if (data.imageUrl)
            setPreviewImage(api.getImgUri(data.imageUrl));
          setGame(data);
        })
        .catch(err => setError('Error al cargar el juego'));
    }
  }, [gameId]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Para el campo de jugadores, actualizar los valores min y max como números
    if (name === 'playersMin' || name === 'playersMax') {
      setGame({
        ...game,
        players: {
          ...game.players,
          [name === 'playersMin' ? 'min' : 'max']: Number(value)
        }
      });
    }
    else {
      setGame({ ...game, [name]: value });
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setPreviewImage(reader.result); // Mostrar la imagen en la vista previa
      reader.readAsDataURL(file);
      setNewImage(file); // Almacenar la imagen seleccionada en memoria
    }
  };


  // Manejo de envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    const gameUpload = { ...game };
    gameUpload.authors = game.authorsCommaSeparated.split(',').map(a => a.trim());
    delete gameUpload.authorsCommaSeparated;
    gameUpload.mechanics = game.mechanicsCommaSeparated.split(',').map(a => a.trim());
    delete gameUpload.mechanicsCommaSeparated;
    try {
      // Si existe gameId, se actualiza, sino, se crea un nuevo juego
      let updatedGame = undefined;
      if (gameId) {
        updatedGame = await api.updateGame(gameId, gameUpload);
      }
      else {
        updatedGame = await api.createGame(gameUpload);
      }

      if (updatedGame && newImage) {
        await api.updateGameImage(updatedGame._id, newImage);
      }
      navigate(`/game/${updatedGame._id}`);
    } catch (err) {
      console.log(err);
      setError('Error al guardar el juego');
    }
  };

  return (
    <Container>
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h4">{gameId ? 'Editar Juego' : 'Crear Juego'}</Typography>

        {error && <Typography color="error">{error}</Typography>}

        <form onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={8} container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Título"
                  name="title"
                  value={game.title || ''}
                  onChange={handleChange}
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Autores (separados por coma)"
                  name="authorsCommaSeparated"
                  value={game.authorsCommaSeparated || ''}
                  onChange={handleChange}
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Descripción"
                  name="description"
                  value={game.description || ''}
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
                  value={game.players.min || 0}
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
                  value={game.players.max || 0}
                  onChange={handleChange}
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Editorial"
                  name="publisher"
                  value={game.publisher || ''}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Tiempo de juego (en minutos)"
                  type="number"
                  name="playTime"
                  value={game.playTime || 0}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Mecánicas (separadas por coma)"
                  name="mechanicsCommaSeparated"
                  value={game.mechanicsCommaSeparated || ''}
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

            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1">Imagen del Juego</Typography>
              {previewImage && (
                <img
                  src={previewImage}
                  alt="Vista previa"
                  style={{ width: '100%', maxWidth: 500, height: 'auto', marginBottom: 10 }}
                />
              )}
              <Button variant="contained" component="label">
                Cambiar Imagen
                <input type="file" hidden accept="image/*" onChange={handleImageChange} />
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default GameForm;
