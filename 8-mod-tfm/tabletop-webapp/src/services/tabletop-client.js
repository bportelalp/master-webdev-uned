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

const instance = {
    getGames
}

export default instance