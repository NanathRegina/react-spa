import { MovieItem } from "./MovieItem";
import { MoviesContainer } from "../styles/MoviesContainer"

export const MoviesList = ({ movies}) => (
    <MoviesContainer>
        <ul>
            {movies.map(m => <MovieItem id={m.id} title ={m.title} />)}
        </ul>
    </MoviesContainer>
);