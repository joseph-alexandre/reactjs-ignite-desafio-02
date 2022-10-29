import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { GenreResponseProps } from "../props/GenreResponseProps";
import { GenreStateProps } from "../props/GenreStateProps";
import { api } from "../services/api";
import { Button } from "./Button";


export function SideBar({previousGenreIdState, setGenreIdState} : GenreStateProps) {

  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  function handleClickButton(id: number) {
    setGenreIdState(id);
  }

  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={previousGenreIdState === genre.id}
            />
          ))}
        </div>

      </nav>
  )
}