import { TMovie } from './movie';

export type TFetchMovieInput = {
  page?: number;
  genre?: string;
  sortRule?: string;
  title?: string;
  movieId?: string;
};
export type TOperateMovieInput = {
  movie: TMovie;
  operation: string;
};
