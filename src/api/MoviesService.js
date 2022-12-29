import axios from 'axios';
const apiKey = '051c18bb7f2c904d64736a678d832603';
const baseUrl = 'https://api.themoviedb.org/3/'; 
const withBaseUrl = path => `${baseUrl}${path}?api_key=${apiKey}`;

export class MoviesService {
    static getMovies(){

        return axios(withBaseUrl('movie/popular'));
    }

    static getMovieById(id){

        return axios(withBaseUrl(`movie/${id}`));
    }
}