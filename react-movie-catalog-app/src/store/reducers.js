import {
  ADD_MOVIE,
  GET_MOVIES,
  DEL_MOVIE,
  EDIT_MOVIE,
  FILTER_MOVIES,
  SORT_MOVIES
} from '../util/consts/consts';

import { getGenresList, getSortList } from '../util/dictionary/dictionary';

const initialState = {
  sortList: getSortList(),
  genres: getGenresList(),
  movies: []
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        sortList: state.sortList,
        genres: state.genres,
        movies: action.movies
      };
    case ADD_MOVIE:
      return {
        sortList: state.sortList,
        genres: state.genres,
        movies: [...state.movies]
      };
    case DEL_MOVIE:
      return {
        sortList: state.sortList,
        genres: state.genres,
        movies: state.movies
      };
    case EDIT_MOVIE:
      return {
        sortList: state.sortList,
        genres: state.genres,
        movies: [...state.movies]
      };

    case FILTER_MOVIES:
      return {
        sortList: state.sortList,
        genres: state.genres,
        movies: action.movies
      };
    case SORT_MOVIES:
      return {
        sortList: state.sortList,
        genres: state.genres,
        movies: action.movies
      };
    default:
      return state;
  }
};
