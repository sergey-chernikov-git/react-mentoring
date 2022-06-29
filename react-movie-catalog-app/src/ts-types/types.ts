export type TMovie = {
  budget: Number;
  genres: Array<String>;
  id: Number;
  overview: string;
  poster_path: string;
  release_date: string;
  revenue: string;
  runtime: Number;
  tagline: string;
  title: string;
  vote_average: Number;
  vote_count: Number;
};

export type TMovieList = {
  movies: Array<TMovie>;
};

export type TMoviesState = {
  sortList: Array<TKeyValue>;
  genres: Array<TKeyValue>;
  movies: Array<TMovie>;
  error: boolean;
  total: Number;
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

export type TMenuPanelProps = {
  genres: Array<TKeyValue>;
  sortList: Array<TKeyValue>;
};

export type TMovieOperationProps = {
  movie?: TMovie;
  operationHandler: Function;
  closeWindow: Function;
};

export type TMoviePreviewProps = {
  movie?: TMovie;
  viewMovie: Function;
};

export type TMoviePreviewDetailsProps = {
  movie: TMovie;
  searchMovie: Function;
};

export type TMoviesPreviewProps = {
  addMovie: Function;
  viewMovie: Function;
};

export type TNotificationProps = {
  type: string;
  message: string;
  description: string;
  onClose: Function;
};
