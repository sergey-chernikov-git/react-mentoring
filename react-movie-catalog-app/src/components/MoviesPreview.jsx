import React from 'react';
import PropTypes from 'prop-types';
import { MovieItem } from './MovieItem';
import { movieType } from './type';

export const MoviesPanel = ({ movies }) => {
  return (
    <>
      <div className="movie-count-panel">
        <b className="movie-count">&nbsp;&nbsp;&nbsp;&nbsp; {movies.length}</b> movies found
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
