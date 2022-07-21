import  { movieReducer } from '../store/reducers'
import  { GET_MOVIES, GET_MOVIE, ADD_MOVIE, DEL_MOVIE, EDIT_MOVIE, FETCH_ERROR } from '../util/consts/consts'

import { getGenresList, getSortList } from '../util/dictionary/dictionary';

const initMovie = {
  id: 12,
  title: "title",
  poster_path: "poster_path",
  runtime: 123,
  genres: ['Action'],
  overview: "overview",
};

describe("Movie Reducer Test Suit", () => {
  test('should return the initial state', () => {
    expect(movieReducer(undefined, { type: undefined })).not.toBeUndefined()
    expect(movieReducer(undefined, { type: undefined })).toMatchObject({"error": false, "genres": [{"key": "All", "value": "All"}, {"key": "Action", "value": "Action"}, {"key": "Drama", "value": "Drama"}, {"key": "Adventure", "value": "Adventure"}, {"key": "Comedy", "value": "Comedy"}, {"key": "Romance", "value": "Romance"}, {"key": "Fantasy", "value": "Fantasy"}], "movie": null, "movies": [], "sortList": [{"key": "ReleaseDate", "value": "Release Date"}, {"key": "Title", "value": "Title"}], "total": 0})
  })

  test('should have 1 movie in state - GET_MOVIES', () => {
    const movies = movieReducer(undefined, { type: GET_MOVIES, movies: [initMovie]}).movies
    expect(movies.length).toEqual(1)
  })


  test('should return the movieId in state - GET_MOVIE', () => {
    const movieId = movieReducer(undefined, { type: GET_MOVIE, movie: initMovie }).movie.id
    expect(movieId).toEqual(initMovie.id)
  })

  test('should have 1 movie in state - ADD_MOVIE', () => {
    const movies = movieReducer(undefined, { type: ADD_MOVIE, movie: initMovie }).movies
    expect(movies.length).toEqual(1)
  })

  test('should have 0 movie in state - DEL_MOVIE', () => {
    const state = {
      sortList: getSortList(),
      genres: getGenresList(),
      movies: new Array(initMovie),
      error: false,
      total: 0
    };
    const movies = movieReducer(state, { type: DEL_MOVIE, movie: initMovie }).movies
    expect(movies.length).toEqual(0)
  })
  test('should have movie with title=edited in state - EDIT_MOVIE', () => {
    const state = {
      sortList: getSortList(),
      genres: getGenresList(),
      movies: new Array(initMovie),
      error: false,
      total: 0
    };
    const movieObj = {
      id: 12,
      title: "edited",
      poster_path: "poster_path",
      runtime: 123,
      genres: ['Action'],
      overview: "overview",
    };
    const editedMovie = movieReducer(state, { type: EDIT_MOVIE, movie: movieObj }).movies[0]
    expect(editedMovie.title).toEqual(movieObj.title)
  })

  test('should have error = true  in state - FETCH_ERROR', () => {
    const error = movieReducer(undefined, { type: FETCH_ERROR }).error
    expect(error).toBeTruthy()
  })
});