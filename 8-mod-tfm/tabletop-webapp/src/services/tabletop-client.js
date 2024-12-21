import axios from 'axios';


const URI = process.env.REACT_APP_TABLETOP_API;

/**
 * Obtener lista de juegos completa
 * @returns Array con juegos
 */
const getGames = async () => {
  const uri = `${URI}/api/games`;
  try {
    const resp = await axios.get(uri);
    return resp.data;
  } catch (error) {
    console.log('Error on', uri, error);
    throw new Error(error.message);
  }
}

/**
 * Busca un juego por ID.
 * @param {string} gameId Id de juego a buscar
 * @returns Juego encontrado o null si no existe
 */
const getGame = async (gameId) => {
  const uri = `${URI}/api/games/${gameId}`;

  try {
    const resp = await axios.get(uri);
    return resp.data;
  } catch (error) {
    // Si el error es un 404, devolver null, porque el juego no existe
    if (error.response && error.response.status === 404) {
      return null;
    }

    console.log('Error on', uri, error);
    throw new Error(error.message);
  }
}


/**
 * Crea un juego nuevo
 * @param {*} game objeto de datos
 * @returns El objeto creado, con el nuevo id generado.
 */
const createGame = async (game) => {
  const uri = `${URI}/api/games`;
  if (game._id) delete game._id;

  try {
    const resp = await axios.post(uri, game);
    return resp.data;
  } catch (error) {
    console.log('Error on', uri, error);
    throw new Error(error.message);
  }
}


/**
 * Edita un juego existente.
 * @param {string} gameId id del objeto a manipular
 * @param {*} game objeto de datos
 * @returns El objeto actualizado por completo.
 */
const updateGame = async (gameId, game) => {
  const uri = `${URI}/api/games/${gameId}`;
  if (game._id) delete game._id;

  try {
    const resp = await axios.put(uri, game);
    return resp.data;
  } catch (error) {
    console.log('Error on', uri, error);
    throw new Error(error.message);
  }
}

/**
 * Actualiza la imagen de un juego
 * @param {*} gameId Id del juego
 * @param {*} fileImage archivo de imagen a enviar
 * @returns El juego entero, con la imagen actualizada.
 */
const updateGameImage = async (gameId, fileImage) => {
  const uri = `${URI}/api/games/${gameId}/image`;
  const formData = new FormData();
  formData.append('image', fileImage);

  try {
    const resp = await axios.put(uri, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return resp.data;
  } catch (error) {
    console.log('Error on', uri, error);
    throw error;
  }
}

const getGameResults = async (gameId, from, to) => {
  const uri = `${URI}/api/game-results/${gameId}`;
  const opt = {
    params: {
      fromDate: from.toISOString(),
      toDate: to.toISOString()
    }
  }
  try {
    const resp = await axios.get(uri, opt);
    return resp.data;
  } catch (error) {
    // Si el error es un 404, devolver null, porque el juego no existe
    if (error.response && error.response.status === 404) {
      return null;
    }

    console.log('Error on', uri, error);
    throw new Error(error.message);
  }
}

/**
 * Función ayuda para obtener la ruta absoluta de una imagen de un juego, puesto
 * que la api devuelve rutas relativas.
 * @param {*} relativePath 
 * @returns 
 */
const getImgUri = (relativePath = "") => `${URI}${relativePath}`;




const instance = {
  getGames,
  getImgUri,
  getGame,
  createGame,
  updateGame,
  updateGameImage,
  getGameResults
}

export default instance