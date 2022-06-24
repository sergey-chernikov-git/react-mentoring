import {
  ADD_MOVIE,
  GET_MOVIES,
  DEL_MOVIE,
  EDIT_MOVIE,
  FILTER_MOVIES,
  SORT_MOVIES,
  SEARCH_MOVIES,
  FETCH_ERROR
} from '../util/consts/consts';

import { getGenresList, getSortList } from '../util/dictionary/dictionary';

const initialState = {
  sortList: getSortList(),
  genres: getGenresList(),
  movies: [],
  error: false
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        sortList: state.sortList,
        genres: state.genres,
        movies: action.movies,
        error: false
      };
    case ADD_MOVIE:
      return {
        sortList: state.sortList,
        genres: state.genres,
        movies: [...state.movies],
        error: false
      };
    case DEL_MOVIE:
      return {
        sortList: state.sortList,
        genres: state.genres,
        movies: state.movies,
        error: false
      };
    case EDIT_MOVIE:
      return {
        sortList: state.sortList,
        genres: state.genres,
        movies: [...state.movies],
        error: false
      };

    case FILTER_MOVIES:
      return {
        sortList: state.sortList,
        genres: state.genres,
        movies: action.movies,
        error: false
      };
    case SORT_MOVIES:
      return {
        sortList: state.sortList,
        genres: state.genres,
        movies: action.movies,
        error: false
      };
    case SEARCH_MOVIES:
      return {
        sortList: state.sortList,
        genres: state.genres,
        movies: action.movies,
        error: false
      };
    case FETCH_ERROR:
      return {
        sortList: state.sortList,
        genres: state.genres,
        movies: [],
        error: true,
        errorDesc: action.errorDesc
      };
    default:
      return state;
  }
};
