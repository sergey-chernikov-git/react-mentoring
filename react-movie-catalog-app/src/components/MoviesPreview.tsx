import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { MoviePreview } from './MoviePreview';
import { movieType } from './type';
import { MovieOperation } from './MovieOperation';
import { MoviesContext } from '../context/MoviesContext';
import { TMovie } from '../ts-types/types';

export const MoviesPreview = ({ addMovie, viewMovie } : {addMovie : Function, viewMovie : Function}) => {
  const [addModalWindow, setAddModalWindow] = useState(false);

  const movies = useContext(MoviesContext);

  const addMovieHandler = (movie: TMovie) => {
    addMovie(movie);
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
