import React, { useState, useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import { MoviePreview } from './MoviePreview';
import { movieType } from './type';
import { MovieOperation } from './MovieOperation';
import { MoviesContext } from '../context/MoviesContext';

import { useSelector, useDispatch } from 'react-redux';
import { addMovieAction } from '../store/actions';

export const MoviesPreview = ({ viewMovie }) => {
  const [addModalWindow, setAddModalWindow] = useState(false);

  const movies = useContext(MoviesContext);
  const dispatch = useDispatch();

  const addMovieHandler = (movie) => {
    dispatch(addMovieAction(movie));
    setAddModalWindow(false);
  };

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
          return <MoviePreview key={movie.id} movie={movie} viewMovie={viewMovie} />;
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
