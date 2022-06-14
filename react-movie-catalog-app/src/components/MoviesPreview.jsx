import React, { useState, useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import { MoviePreview } from './MoviePreview';
import { movieType } from './type';
import { MovieOperation } from './MovieOperation';
import { MoviesContext } from '../context/MoviesContext';

export const MoviesPreview = ({ deleteMovie, editMovie, addMovie, viewMovie }) => {
  const [addModalWindow, setAddModalWindow] = useState(false);
  const movies = useContext(MoviesContext);

  const addMovieHandler = useCallback((movie) => {
    addMovie(movie);
    setAddModalWindow(false);
  }, []);

  const movieAddOperationElem = (
    <MovieOperation
      operationHandler={addMovieHandler}
      closeWindow={() => setAddModalWindow(false)}
    />
  );
  return (
    <>
      {addModalWindow ? movieAddOperationElem : null}

      <button className="search-movie-add-button" onClick={() => setAddModalWindow(true)}>
        + Add Movie
      </button>
      <div className="movie-count-panel">
        <b className="movie-count">{movies.length}</b> movies found
      </div>
      <div className="movie-preview-panel">
        {movies.map((movie) => {
          return (
            <MoviePreview
              id={movie.id}
              key={movie.id}
              movie={movie}
              deleteMovie={deleteMovie}
              editMovie={editMovie}
              viewMovie={viewMovie}
            />
          );
        })}
      </div>
    </>
  );
};

MoviesPreview.propTypes = {
  movies: PropTypes.arrayOf(movieType),
  deleteMovie: PropTypes.func,
  editMovie: PropTypes.func
};
