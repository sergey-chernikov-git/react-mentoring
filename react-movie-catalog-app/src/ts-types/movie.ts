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

export type TMovies = Array<TMovie>;

export type TMovieResponse = {
  data: TMovies;
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
  movie?: TMovie;
  errorDesc?: string;
};

export type TMoviesAction = {
  type: string;
  movie?: TMovie;
  total?: number;
  movies?: TMovies;
  errorDesc?: string;
};

export type TKeyValue = {
  key: string;
  value: string;
};

export type TDictionary = Array<TKeyValue>;
