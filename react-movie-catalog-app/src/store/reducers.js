import {
  ADD_MOVIE,
  GET_MOVIES,
  DEL_MOVIE,
  EDIT_MOVIE,
  FILTER_MOVIES,
  SORT_MOVIES
} from '../util/consts/consts';

import { filterMovies, sortMovies, editMovie, deleteMovie } from '../logic/businessLogic';

const initialState = {
  genres: [],
  movies: []
};

export const movieReducer = (state = initialState, action) => {
  let list = [];
  switch (action.type) {
    case GET_MOVIES:
      return {
        genres: state.genres,
        movies: action.movies
      };
    case ADD_MOVIE:
      return {
        genres: state.genres,
        movies: [...state.movies, action.movie]
      };
    case DEL_MOVIE:
      return {
        genres: state.genres,
        movies: deleteMovie(action.movie)
      };
    case EDIT_MOVIE:
      return {
        genres: state.genres,
        movies: editMovie(action.movie, [...state.movies])
      };

    case FILTER_MOVIES:
      return {
        genres: state.genres,
        movies: filterMovies(action.genre, [...state.movies])
      };
    case SORT_MOVIES:
      return {
        genres: state.genres,
        movies: sortMovies(action.sortBy, [...state.movies])
      };
    default:
      return state;
  }
};
