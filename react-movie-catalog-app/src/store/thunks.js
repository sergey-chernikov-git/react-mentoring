import { GET_MOVIES, FILTER_MOVIES, SORT_MOVIES, FETCH_ERROR } from '../util/consts/consts';

import { Sort } from '../util/dictionary/dictionary';

const limit = 10;
const baseUrl = 'http://localhost:4000';

export const getMovies = () => {
  return (dispatch) => {
    fetch(`${baseUrl}/movies?limit=${limit}`)
      .then((response) => response.json())
      .then((movies) => {
        dispatch({
          type: GET_MOVIES,
          movies: movies.data
        });
      })
      .catch((error) => _errorDispatch(dispatch, error));
  };
};

export const addMovie = (movie) => {
  console.log(movie);
  return (dispatch) => {
    fetch(`${baseUrl}/movies?limit=${limit}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(movie)
    })
      .then((response) => response.json())
      .then((movie) => {
        dispatch(getMovies());
      })
      .catch((error) => _errorDispatch(dispatch, error));
  };
};

export const deleteMovie = (movie) => {
  return (dispatch) => {
    fetch(`${baseUrl}/movies/${movie.id}`, {
      method: 'DELETE'
    })
      .then((response) => {
        dispatch(getMovies());
      })
      .catch((error) => _errorDispatch(dispatch, error));
  };
};

export const editMovie = (movie) => {
  console.log(movie);
  return (dispatch) => {
    fetch(`${baseUrl}/movies`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(movie)
    })
      .then((response) => response.json())
      .then((movie) => {
        dispatch(getMovies());
      })
      .catch((error) => _errorDispatch(dispatch, error));
  };
};

export const filterMovies = (genre) => {
  if (genre === 'All') return getMovies();
  return (dispatch) => {
    fetch(`${baseUrl}/movies?filter=${genre}&?limit=${limit}`)
      .then((response) => response.json())
      .then((movies) => {
        dispatch({
          type: FILTER_MOVIES,
          movies: movies.data
        });
      })
      .catch((error) => _errorDispatch(dispatch, error));
  };
};

export const sortMovies = (sortRule) => {
  let sortBy = 'release_date';
  let sortOrder = 'desc';
  if (sortRule === Sort.Title) {
    sortBy = 'title';
    sortOrder = 'asc';
  }
  return (dispatch) => {
    fetch(`${baseUrl}/movies?sortBy=${sortBy}&sortOrder=${sortOrder}&?limit=${limit}`)
      .then((response) => response.json())
      .then((movies) => {
        dispatch({
          type: SORT_MOVIES,
          movies: movies.data
        });
      })
      .catch((error) => _errorDispatch(dispatch, error));
  };
};

export const searchMovieByTitle = (title) => {
  return (dispatch) => {
    fetch(`${baseUrl}/movies?searchBy=title&search=${title}`)
      .then((response) => {
        if (response.status != 200) {
          throw `Response code is: ${response.status}`;
        }
        return response.json();
      })
      .then((movies) => {
        dispatch({
          type: GET_MOVIES,
          movies: movies.data
        });
      })
      .catch((error) => _errorDispatch(dispatch, error));
  };
};

function _errorDispatch(dispatchCallBack, error) {
  console.error('Error: ', error);
  dispatchCallBack({
    type: FETCH_ERROR,
    errorDesc: error.message
  });
}
