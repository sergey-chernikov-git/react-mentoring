import * as NotFoundImg from '../assets/img/404/404.png';
import { TMovie } from '../ts-types/types';
export const useMovie = (movie: TMovie) => {
  const { poster_path = NotFoundImg } = movie;
  return {
    ...movie,
    poster_path
  };
};
