import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { MoviesService } from "../api/MoviesService";
import { MovieContainer } from "../styles/MovieContainer";

export const Movie = () => {
    const {id} = useParams();

    const [movie, setMovie] = useState({}); // o {} é o tipo do dado que iremos receber, nesse caso, um objeto.

    const fetchMovie = async () => {
        try{
            const {data} = await MoviesService.getMovieById(id);
            setMovie(data);
            
        } catch(error){
            alert("Ocorreu um erro ao retornar os items");
        }
    }

    useEffect(() => {
        fetchMovie();
    }, []);

return(
    <MovieContainer>
        <h1>{movie.title}</h1>
        <img alt="poster do filme" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}></img>
        <article>{movie.overview}</article>
    </MovieContainer>
)
};