import axios from 'axios';


const URI = process.env.REACT_APP_TABLETOP_API;


const getGames = () => {
    const uri = `${URI}/api/games`;
    try {
        return axios.get(uri)
            .then(resp => resp.data);
    } catch (error) {
        console.log('Error on', uri, error);
        throw new Error(error.message);
    }
}

const getGame = (gameId) => {
    const uri = `${URI}/api/games/${gameId}`;

    try {
        const promise = axios.get(uri)
            .then(resp => resp.data);
        return promise;
    } catch (error) {
        console.log('Error on', uri, error);
        throw new Error(error.message);
    }
}

const createGame = (game) => {
    const uri = `${URI}/api/games`;
    if (game._id)
        delete game._id;
    try {
        const promise = axios.post(uri, game)
            .then(resp => resp.data);
        return promise;
    } catch (error) {
        console.log('Error on', uri, error);
        throw new Error(error.message);
    }
}

const updateGame = (gameId, game) => {
    const uri = `${URI}/api/games/${gameId}`;
    if (game._id)
        delete game._id;

    try {
        const promise = axios.put(uri, game)
            .then(resp => resp.data);
        return promise;
    } catch (error) {
        console.log('Error on', uri, error);
        throw new Error(error.message);
    }
}

const updateGameImage = (gameId, fileImage) => {
    const uri = `${URI}/api/games/${gameId}/image`;
    const formData = new FormData();
    formData.append('image', fileImage);
    try {
        const promise = axios.put(uri, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
            .then(resp => resp.data);
        return promise;
    } catch (error) {
        console.log('Error on', uri, error);
        throw error;
    }
}

const getImgUri = (relativePath = "") => `${URI}${relativePath}`;

const instance = {
    getGames,
    getImgUri,
    getGame,
    createGame,
    updateGame,
    updateGameImage
}

export default instance