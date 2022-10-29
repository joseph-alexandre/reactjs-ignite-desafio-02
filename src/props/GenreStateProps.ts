import { Dispatch, SetStateAction } from "react";

export interface GenreStateProps {
    setGenreIdState: Dispatch<SetStateAction<number>>,
    previousGenreIdState: number
}
  