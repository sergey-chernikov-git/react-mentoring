import {
  ADD_MOVIE,
  GET_MOVIES,
  DEL_MOVIE,
  EDIT_MOVIE,
  FILTER_MOVIES,
  SORT_MOVIES,
  FETCH_ERROR
} from '../util/consts/consts';
import { Sort } from '../util/dictionary/dictionary';

const limit = 10;

export const getMovies = () => {
  return (dispatch) => {
    fetch(`http://localhost:4000/movies?limit=${limit}`)
      .then((response) => response.json())
      .then((movies) => {
        dispatch({
          type: GET_MOVIES,
          movies: movies.data
        });
      })
      .catch((error) => console.log(error));
  };
};

export const addMovie = (movie) => {
  console.log(movie);
  return (dispatch) => {
    fetch(`http://localhost:4000/movies?limit=${limit}`, {
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
      .catch((error) => console.log(error));
  };
};

export const deleteMovie = (movie) => {
  return (dispatch) => {
    fetch(`http://localhost:4000/movies/${movie.id}`, {
      method: 'DELETE'
    })
      .then((response) => {
        dispatch(getMovies());
      })
      .catch((error) => console.log(error));
  };
};

export const editMovie = (movie) => {
  console.log(movie);
  return (dispatch) => {
    fetch(`http://localhost:4000/movies`, {
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
      .catch((error) => console.log(error));
  };
};

export const filterMovies = (genre) => {
  if (genre === 'All') return getMovies();
  return (dispatch) => {
    fetch(`http://localhost:4000/movies?filter=${genre}&?limit=${limit}`)
      .then((response) => response.json())
      .then((movies) => {
        dispatch({
          type: FILTER_MOVIES,
          movies: movies.data
        });
      })
      .catch((error) => console.log(error));
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
    fetch(`http://localhost:4000/movies?sortBy=${sortBy}&sortOrder=${sortOrder}&?limit=${limit}`)
      .then((response) => response.json())
      .then((movies) => {
        dispatch({
          type: SORT_MOVIES,
          movies: movies.data
        });
      })
      .catch((error) => console.log(error));
  };
};

export const searchMovieByTitle = (title) => {
  console.log(title);
  return (dispatch) => {
    fetch(`http://localhost:4000/movies?searchBy=title&search=${title}`)
      .then((response) => {
        if (response.status != 200) { throw `Response code is: ${response.status}`}
        return response.json();         
      })
      .then((movies) => {
        dispatch({
          type: GET_MOVIES,
          movies: movies.data
        });
      })
      .catch((error) => {
        console.error("Error: ",error);
        dispatch({
          type: FETCH_ERROR,
        });
      });
  };
};
