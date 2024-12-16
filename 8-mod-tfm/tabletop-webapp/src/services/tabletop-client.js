import axios from 'axios';


const URI = process.env.REACT_APP_TABLETOP_API;


const getGames = async () => {
    const uri = `${URI}/api/games`;
    try {
        return await axios.get(uri)
            .then(resp => resp.data.results);
    } catch (error) {
        console.log('Error on', uri, error);
        throw new Error(error.message);
    }
}

export default {
    getGames
}