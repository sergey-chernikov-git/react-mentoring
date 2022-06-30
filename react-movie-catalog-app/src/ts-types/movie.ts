export type TMovieBase = {
  title: string;
  poster_path: string;
  runtime: number;
  genres: Array<String>;
  overview: string;
  release_date?: string;
  budget?: number;
  revenue?: number;
  tagline?: string;
  vote_average?: number;
  vote_count?: number;
};

export type TMovie = TMovieBase & {
  id: number;
};

export type TMovieList = {
  movies: Array<TMovie>;
};

export type TMovieResponse = {
  data: TMovieList;
  total: number;
  offset: number;
  limit: number;
};

export type TMoviesState = {
  sortList: Array<TKeyValue>;
  genres: Array<TKeyValue>;
  movies: Array<TMovie>;
  error: boolean;
  total: number;
  errorDesc?: string;
};

export type TMoviesAction = {
  type: string;
  movie?: TMovie;
  total?: number;
  movies?: TMovieList;
  errorDesc?: string;
};

export type TKeyValue = {
  key: string;
  value: string;
};
