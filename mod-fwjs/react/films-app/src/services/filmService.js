import axios from 'axios';
// import "../../.env.development.local"
const URI = "https://api.themoviedb.org/3/movie/";
const lang = 'language=es-ES';


const getPopularMovies = async () => {
    try {
        console.log(process.env.REACT_APP_API_KEY);
        return await axios.get(`${URI}now_playing?${process.env.API_KEY}&${lang}`)
            .then(resp => resp.data.results);
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}


export {
    getPopularMovies
}