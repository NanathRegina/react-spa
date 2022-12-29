import { MoviesList } from "../components/MoviesList";
import { MoviesContainer } from "../styles/MoviesContainer";
import { useState, useEffect } from "react";
import { MoviesService } from "../api/MoviesService";

export const Home = () => {
    const [movies, setMovies] = useState([]); // o [] é o tipo do dado que iremos receber, nesse caso, um array.

    const fetchMovies = async () => {
        try{
            const {data} = await MoviesService.getMovies();
            setMovies(data.results);
        } catch(error){
            alert("Ocorreu um erro ao retornar os items");
        }
    }

    useEffect(() => {
        fetchMovies();
    }, []);

return(
    <MoviesContainer>
        <MoviesList movies={movies}/>
    </MoviesContainer>
) 
};