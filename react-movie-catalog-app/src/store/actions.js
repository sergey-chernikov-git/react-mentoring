import {
  ADD_MOVIE,
  GET_MOVIES,
  DEL_MOVIE,
  EDIT_MOVIE,
  SORT_MOVIES,
  FILTER_MOVIES
} from './../util/consts/consts';

export const getMoviesAction = (movies) => {
  return {
    type: GET_MOVIES,
    movies: movies
  };
};

export const addMovieAction = (movie) => {
  return {
    type: ADD_MOVIE,
    movie: movie
  };
};

export const delMovieAction = (movie) => {
  return {
    type: DEL_MOVIE,
    movie: movie
  };
};

export const editMovieAction = (movie) => {
  return {
    type: EDIT_MOVIE,
    movie: movie
  };
};

export const sortMoviesAction = (e) => {
  return {
    type: SORT_MOVIES,
    sortBy: e.target.value
  };
};

export const filterMoviesAction = (genre) => {
  return {
    type: FILTER_MOVIES,
    genre: genre
  };
};
