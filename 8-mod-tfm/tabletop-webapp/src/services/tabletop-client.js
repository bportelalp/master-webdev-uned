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

const getImgUri = (relativePath = "") => `${URI}${relativePath}`;

const instance = {
    getGames,
    getImgUri,
    getGame
}

export default instance