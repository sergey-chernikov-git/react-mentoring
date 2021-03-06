import { TMovie, TMoviesAction } from '../ts-types/movie';
import { ADD_MOVIE, GET_MOVIES, DEL_MOVIE, EDIT_MOVIE, FETCH_ERROR } from '../util/consts/consts';
import { getGenresList, getSortList } from '../util/dictionary/dictionary';

const movieEmptyList: Array<TMovie> = [];

const initialState = {
  sortList: getSortList(),
  genres: getGenresList(),
  movies: movieEmptyList,
  error: false,
  total: 0
};

export const movieReducer = (state = initialState, action: TMoviesAction) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.movies,
        total: action.total
      };
    case ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, action.movie],
        total: action.total + 1
      };
    case DEL_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.movie.id),
        total: action.total - 1
      };
    case EDIT_MOVIE:
      return {
        ...state,
        movies: state.movies.map((movie) => (movie.id === action.movie.id ? action.movie : movie))
      };
    case FETCH_ERROR:
      return {
        ...state,
        movies: movieEmptyList,
        error: true,
        errorDesc: action.errorDesc
      };
    default:
      return state;
  }
};
