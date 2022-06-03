import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { MovieItem } from './MovieItem';
import { movieType } from './type';

export const MoviesPanel = ({ movies, deleteMovie, editMovie }) => {
  return (
    <>
      <div className="movie-count-panel">
        <b className="movie-count">{movies.length}</b> movies found
      </div>
      <div className="movie-preview-panel">
        {movies.map((movie) => {
          return (
            <MovieItem
              id={movie.id}
              key={movie.id}
              movie={movie}
              deleteMovie={deleteMovie}
              editMovie={editMovie}
            />
          );
        })}
      </div>
    </>
  );
};

MoviesPanel.propTypes = {
  movies: PropTypes.arrayOf(movieType)
};
