import { useEffect, useState } from "react";
import { GenreResponseProps } from "../props/GenreResponseProps";
import { MovieResponseProps } from "../props/MovieResponseProps";
import { api } from "../services/api";
import { MovieCard } from "./MovieCard";

export function Content( {selectedGenre} : GenreResponseProps | any) {
  const [movies, setMovies] = useState<MovieResponseProps[]>([]);

  useEffect(() => {
    api.get<MovieResponseProps[]>(`movies/?Genre_id=${selectedGenre.id}`).then(response => {
      setMovies(response.data);
    });
  }, [selectedGenre]);

  return (
    <div className="container">
        <header>
          <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
        </header>

        <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
  )
}