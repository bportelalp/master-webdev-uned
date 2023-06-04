import axios from 'axios';

const URI = "https://api.themoviedb.org/3/movie/";
const lang = 'language=es-ES';


const getPopularMovies = async () => {
    try {
        return await axios.get(`${URI}now_playing?${process.env.REACT_APP_API_KEY}&${lang}`)
            .then(resp => resp.data.results);
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}

/**
 * Obtiene los datos de una pelicula
 * @param {*} movieId Id de la pelicula
 * @returns 
 */
const getMovieData = async (movieId) => {
    try {
        return await axios.get(`${URI}${movieId}?${process.env.REACT_APP_API_KEY}&${lang}`)
            .then(resp => {
                return resp.data
            });
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}
export {
    getPopularMovies,
    getMovieData
}