import React from 'react';
import PropTypes from 'prop-types';
import { MovieItem } from './MovieItem';
import { movieType } from './type/movieType';

export const MoviesPanel = ({ movies }) => {
  return (
    <>
      <div className="movie-count-panel">
        <b>{movies.length}</b> movies found
      </div>
      <div className="movie-preview-panel">
        {movies.map((movie) => {
          return <MovieItem key={movie.id} movie={movie} />;
        })}
      </div>
    </>
  );
};

MoviesPanel.propTypes = {
  movies: PropTypes.arrayOf(movieType)
};